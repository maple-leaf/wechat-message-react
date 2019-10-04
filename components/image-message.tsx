import { useState, useMemo } from 'react';
import { Role } from './wechat-message';
import styled from 'styled-components';

export interface IImageMessage {
    thumbnail: string,
    image: string,
    type: 'image',
    role: Role,
}
export interface ImageMessageProps {
    message: IImageMessage,
    className?: string,
}

const StyledImageMessageThumb = styled.img`
    max-width: 60px;
`;

const StyledImageMessageViewer = styled.div.attrs(props => ({
    style: {
        left: `${props.rect.left}px`,
        width: `${props.rect.width}px`,
        top: `${props.rect.top}px`,
        height: `${props.rect.height}px`,
        lineHeight: `${props.rect.height}px`,
    }
}))`
    text-align: center;
    position: fixed;

    &:after {
        content: "";
        background: rgba(0, 0, 0, .6);
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    img {
        position: relative;
        z-index: 1;
        vertical-align: middle;
        max-width: 80%;
    }
`;

const ImageMessage = ({ message }: ImageMessageProps):React.ReactElement => {
    const [visible, setVisible] = useState(false);
    const rect = useMemo(() => {
        const container = document.body.querySelector('#panelContent');
        return container.getBoundingClientRect();
    });
    return (
        <>
            <StyledImageMessageThumb src={message.thumbnail} onClick={() => setVisible(true)}/>
            {
                    visible
                        ? (
                            <StyledImageMessageViewer rect={rect} onClick={() => setVisible(false)}>
                                <img src={message.image}/>
                            </StyledImageMessageViewer>
                        )
                        : null
            }
        </>
    )
}

export default ImageMessage;
