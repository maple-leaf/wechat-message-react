import styled from 'styled-components';
import { IMessage } from './wechat-message';

interface IProps {
    message: IMessage,
    defaultRender: React.ReactNode,
}

const VideoMark = styled.div`
    width: 10px;
    height: 10px;
    border: 3px solid blue;
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
`;

export default ({ message, defaultRender }: IProps) => {
    const Avatar = defaultRender;
    if (!message.author.hasNewVideo) return <Avatar/>;
    return (
        <>
            <Avatar/>
            <VideoMark/>
        </>
    )
}
