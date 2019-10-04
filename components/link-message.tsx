import { Role } from './wechat-message';
import styled from 'styled-components';

export interface ILinkMessage {
    title: string,
    desc: string,
    thumbnail: string,
    type: string,
    role: Role,
}
export interface LinkMessageProps {
    message: ILinkMessage,
    className?: string,
}

const StyledLinkMessageTitle = styled.h4`
    font-size: 14px;
    color: #000;
    margin: 0;
`;

const StyledLinkMessageDescWrap = styled.div`
    display: flex;
    margin-top: 4px;
    justify-content: space-between;
    min-width: 120px;
`;

const StyledLinkMessageDesc = styled.p`
    font-size: 12px;
    color: #999;
    flex: 1;
    margin: 0 18px 0 0;
`;

const StyledLinkMessageThumb = styled.img`
    height: 60px;
    width: 60px;
`;

const LinkMessage = ({ message }: LinkMessageProps):React.ReactElement => {
    return (
        <>
            <StyledLinkMessageTitle>{message.title}</StyledLinkMessageTitle>
            <StyledLinkMessageDescWrap>
                <StyledLinkMessageDesc>{message.desc}</StyledLinkMessageDesc>
                {
                    message.thumbnail
                        ?  <StyledLinkMessageThumb src={message.thumbnail}/>
                        : null
                }
            </StyledLinkMessageDescWrap>
        </>
    )
}

export default LinkMessage;
