import { useState } from 'react';
import styled from "styled-components";
import Loading from './loading';

const isLink = (str: string | undefined): boolean =>
    str ? /^(https?:)?(\/\/)?\w+\.\w+$/.test(str) : false;

interface StyledProps {
    className?: string;
}
export enum Role {
    sender,
    recevier,
    system
}

export enum MessageStatus {
    loading,
    sent,
    failed,
    read
}

export interface IAuthor {
    name: string;
    thumbnail?: string;
}

export interface IMessage {
    content?: string;
    type: string;
    role: Role;
    status: MessageStatus;
    author: IAuthor;
}

export interface MessageProps extends StyledProps, React.HTMLAttributes<HTMLElement> {
    message: IMessage;
    render?: (message: IMessage) => React.ReactNode;
    messagePrefix?: (message: IMessage) => React.ReactNode;
    messagePostfix?: (message: IMessage) => React.ReactNode;
}

const MessageBlock = styled.div`
    display: flex;
    justify-content: ${props =>
        props.role === Role.sender ? "flex-end" : "flex-start"};
    align-items: flex-start;
    color: #000;
    font-size: 14px;
    margin: 0 10px;
    position: relative;
`;

const MessageItem = ({ className, message, render, onClick }: MessageProps) => {
    const renderFn = render || (() => message.content);
    return <div className={className} onClick={onClick}>{renderFn(message)}</div>;
};
const StyledMessageItem = styled(MessageItem)`
    border-radius: 4px;
    background-color: ${props => props.message.role === Role.sender ? "#95ec69" : "#fff"};
    padding: 10px;
    max-width: 80%;
    color: ${props => (isLink(props.message.content) ? "#2782d7" : "#000")};
    order: 1;
    position: relative;

    &:before {
        content: "";
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        position: absolute;
        top: 10px;
        ${props => props.message.role === Role.sender ? {
            'border-left-color': '#95ec69',
            right: '-12px',
        } : {
            'border-right-color': '#fff',
            left: '-12px',
        }};
    }
`;

interface PrefixProps {
    className?: string,
    message: IMessage,
    onFailedClick: () => void,
}

const MessagePrefix = ({ className, message, onFailedClick }: PrefixProps) => {
    if (message.status === MessageStatus.loading) {
        return (
            <Loading className={className}/>
        );
    } else if (message.status === MessageStatus.failed) {
        return <span className={className} onClick={onFailedClick}>!</span>;
    }

    return null;
};

const failedMark = {
    background: '#b52f4c',
    'font-size': '12px',
    width: '18px',
    height: '18px',
    color: '#fff',
    'text-align': 'center',
    'line-height': '18px',
    'border-radius': '50%',
    cursor: 'pointer',
}

const StyledMessagePrefix = styled(MessagePrefix)`
    order: ${props => (props.message.role === Role.sender ? 0 : 2)};
    margin: 0 8px;
    ${
        props => props.message.status === MessageStatus.failed ? failedMark : {
            width: '24px',
            height: '24px',
        }
    }
`;

const MessagePostfix = ({ className, message }: MessageProps) => {
    const { author } = message;
    return (
        <a href="#" className={className}>
            { author.thumbnail ? <img src={author.thumbnail}/> : author.name.substring(0, 1) }
        </a>
    )
};

const StyledMessagePostfix = styled(MessagePostfix)`
    font-size: 24px;
    color: #000;
    display: block;
    height: 48px;
    line-height: 48px;
    text-align: center;
    flex: 0 0 48px;
    border-radius: 4px;
    background-color: #fff;
    text-decoration: none;
    ${props => (props.message.role === Role.sender ? {
        'margin-left': '12px',
        order: 2,
    } : {
        'margin-right': '12px',
        order: 0,
    })};

    img {
        max-width: 100%;
        max-height: 100%;
    }
`;

const AlignCenter = styled.div`
    display: flex;
    align-items: center;
    order: 1;
`;


const WeChatMessage = ({
    className,
    message,
    render,
    onClick,
    messagePrefix,
    messagePostfix
}: MessageProps) => {
    const [_message, setMessage] = useState(message);

    const defaultPostfix = () => <StyledMessagePostfix message={_message} />;
    const defaultPrefix = () =>
                <StyledMessagePrefix message={_message}
                    onFailedClick={() => setMessage({
                        ..._message,
                        status: MessageStatus.loading
                    })}
                />;
    const Prefix = messagePrefix;
    const Postfix = messagePostfix;
    
    return (
        <MessageBlock
            role={_message.role}
            className={className}
        >
            <AlignCenter>
                {Prefix ? (
                    <Prefix message={_message} defaultRender={defaultPrefix}/>
                ) : defaultPrefix()}
                <StyledMessageItem message={_message} render={render} onClick={onClick}/>
            </AlignCenter>
            {Postfix ? (
                <Postfix message={_message} defaultRender={defaultPostfix}/>
            ) : defaultPostfix()}
        </MessageBlock>
    );
};

export { MessageBlock, StyledMessageItem as MessageItem };

export default WeChatMessage;
