import { useState } from 'react';
import styled from "styled-components";
import { Role, MessageStatus, IMessage } from "./wechat-message";
import WeChatMessageBridge from './wechat-message-bridge';
import Button from './button';

const messages = [{
    id: 1,
    content: "test1",
    role: Role.sender,
    type: "normal",
    author: {
        name: '枫叶'
    }
},
{
    id: 2,
    content: "google.com",
    role: Role.sender,
    type: "normal",
    status: MessageStatus.loading,
    author: {
        name: '枫叶',
        hasNewVideo: true,
    }
},
{
    id: 3,
    title: "NO TITLE",
    desc: "test",
    url: 'http://example.com',
    thumbnail:
        "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png",
    role: Role.recevier,
    type: "link",
    status: MessageStatus.failed,
    author: {
        name: '叶枫'
    }
}, {
    id: 4,
    title: "Upvote Me",
    desc: "This behaviour is only supported within the context of Styled Components",
    upvote: 0,
    downvote: 0,
    role: Role.recevier,
    type: "vote",
    author: {
        name: '叶枫'
    }
}];

interface StyledProps {
    className?: string;
}

interface TitleProps extends StyledProps {
    title: string;
}

interface MessagesProps extends StyledProps {
    messages: IMessage[];
}

const PanelTitle = (props: TitleProps): React.ReactElement => {
    return <h4 className={props.className}>{props.title}</h4>;
};
const StyledPanelTitle = styled(PanelTitle)`
    font-size: 14px;
    color: #000;
    background-color: #e5eaea;
    text-align: center;
    flex: 0 0 40px;
    line-height: 40px;
    margin: 0;
`;

const panelContent = ({ className, messages }: MessagesProps): React.ReactElement => {
    return (
        <div className={className} id="panelContent">
            { messages.map(
                message => <WeChatMessageBridge message={message} key={message.id.toString()}/>
            ) }
        </div>
    );
};
const StyledPanelContent = styled(panelContent)`
    font-size: 14px;
    color: #000;
    background-color: #ededed;
    flex: 1;
    padding-top: 10px;
    position: relative;
    overflow: auto;
`;

const panelFooter = ({ className, onClick }: StyledProps): React.ReactElement => {
    return (
        <div className={className}>
            <Button onClick={
                () => onClick({type: 'addMessage', data: {content: '生日快乐', type: 'normal'}})
            }>生日快乐</Button>
            <Button onClick={
                () => onClick({type: 'addMessage', data: { title: 'Learn React', desc: 'how to use react?', type: 'link', url: 'example.com' }})
            }>链接信息</Button>
            <Button onClick={
                    () => onClick({
                        type: 'addMessage',
                        data: {
                            type: 'image',
                            thumbnail:
                                      "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png",
                            image:
                                      "//cdn.devdocs.io/assets/sprites/docs@2x-cdcc6bcba322c1a0ccc60722f8ad8e37ea4fc4a4c2701736d9f283ac876d89b1.png",
                        }
                    })
            }>图片信息</Button>
            <Button onClick={
                    () => onClick({
                        type: 'addMessage',
                        data: {
                            type: 'envelope',
                            role: Role.system,
                            takeBy: '枫叶',
                            envelopeId: 123,
                        }
                    })
            }>红包被抢信息</Button>
        </div>
    );
};

const StyledPanelFooter = styled(panelFooter)`
    background-color: #f6f6f6;
    display: flex;
    align-items: center;
    flex: 0 0 80px;
    padding: 8px;
    box-sizing: border-box;

    button {
        padding: 8px;
    }
`;

const WeChatPanel = ({ className }: StyledProps): React.ReactElement => {
    const [_messages, setMessages] = useState(messages);

    const lazyAddMessages = (function() {
        let lastTimeStamp = 0;
        let timer;
        let addedMessages = [];

        return (message: IMessage | IMessage[]) => {
            const timeStamp = Date.now();

            if (Array.isArray) {
                addedMessages = addedMessages.concat(message);
            } else {
                addedMessages.push(message);
            }
            lastTimeStamp = timeStamp;

            clearTimeout(timer);

            timer = setTimeout(() => {
                if (timeStamp === lastTimeStamp) {
                    setMessages([
                        ..._messages.map(m => ({
                            ...m,
                            status: typeof m.status !== 'undefined' ? m.status : MessageStatus.read,
                        })),
                        ...addedMessages,
                    ]);
                    addedMessages = [];
                }
            }, 300)
        }
    })()

    const onFooterClick = ({ type, data }) => {
        switch(type) {
            case 'addMessage':
                lazyAddMessages({
                    id: Date.now(),
                    ...data,
                    role: data.role ? data.role : (Math.random() > 0.5 ? Role.sender : Role.recevier),
                    author: {
                        name: '枫叶'
                    }
                })
                break;
            default:
                break;
        }
    }
    
    return (
        <div className={className}>
            <StyledPanelTitle title="枫叶"/>
            <StyledPanelContent messages={_messages}/>
            <StyledPanelFooter onClick={onFooterClick}/>
        </div>
    );
};

const StyledWeChatPanel = styled(WeChatPanel)`
    display: flex;
    flex-direction: column;
`;

export default StyledWeChatPanel;
