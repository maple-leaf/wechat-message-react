import styled from 'styled-components';
import WeChatMessage, { MessageBlock, MessageProps, Role, MessageStatus } from "./wechat-message";
import LinkMessage, { LinkMessageProps, ILinkMessage } from "./link-message";
import VoteMessage from './vote-message';
import ImageMessage, { IImageMessage } from './image-message';
import SystemMessage from './system-message';
import useEmojiRain from './emoji-rain';
import AvatarWithVideoMark from "./avatar-with-video-mark";

type Props = MessageProps | LinkMessageProps;

const SystemMessageBlock = styled(MessageBlock)`
    justify-content: center;
`;

const MessageBridge = ({ className, message }: Props): React.ReactElement => {
    let renderFn;
    let onClick;

    if (message.role === Role.system) {
        return (
            <SystemMessageBlock className={className}>
                <SystemMessage message={message} />
            </SystemMessageBlock>
        )
    }
    else {
        switch(message.type) {
            case 'link':
                renderFn = () => <LinkMessage message={message as ILinkMessage} />;
                onClick = () => alert((message as ILinkMessage).url);
            break;
            case 'vote':
                renderFn = () => <VoteMessage message={message}/>;
            break;
            case 'image':
                renderFn = () => <ImageMessage message={message as IImageMessage}/>
            break;
            default:
            break;
        }
    }

    const emojiRainRender = message.status !== MessageStatus.read
        ? useEmojiRain(message.content)
        : null;

    const defaultRender = () => 
                           <WeChatMessage
                               className={className}
                               onClick={onClick}
                               message={message}
                               render={renderFn}
                               messagePostfix={AvatarWithVideoMark}
                           />;

    return emojiRainRender ? emojiRainRender(defaultRender) : defaultRender();
}

const StyledMessageBridge = styled(MessageBridge)`
    margin-bottom: 14px;
    min-width: ${props => props.message.type === 'normal' ? '80px' : '120px'};
`;

export default StyledMessageBridge;
