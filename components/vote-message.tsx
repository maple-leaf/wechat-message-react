import { useState } from 'react';
import { Role } from './wechat-message';
import styled from 'styled-components';
import Button from './button';

interface IVoteMessage {
    title: string,
    desc: string,
    upvote: number,
    downvote: number,
    type: string,
    role: Role,
}
export interface VoteMessageProps {
    message: IVoteMessage,
    className?: string,
}

const StyledVoteMessageTitle = styled.h4`
    font-size: 14px;
    color: #000;
    margin: 0;
`;

const StyledVoteMessageDesc = styled.p`
    font-size: 12px;
    color: #999;
    flex: 1;
    margin: 0 18px 0 0;
    height: 60px;
`;

const StyledVoteMessageBtnWrap = styled.div`
    display: flex;
    height: 30px;
    margin-top: 4px;
    justify-content: space-between;
    margin: 0 -10px -10px;
    border-top: 1px solid #999;

    button {
        flex: 1;
        margin-left: 8px;
        &:last-child {
            border-left: 1px solid #999;
        }
    }
`;

const Count = styled.span`
    display: inline-block;
    vertical-align: middle;
    min-width: 20px;
    height: 20px;
    line-height: 20px;
    background: #eee;
    border-radius: 50%;
`;

const VoteMessage = ({ message }: VoteMessageProps):React.ReactElement => {
    const [upvote, setUpvote] = useState(message.upvote);
    const [downvote, setDownvote] = useState(message.upvote);
    return (
        <>
            <StyledVoteMessageTitle>{message.title}</StyledVoteMessageTitle>
            <StyledVoteMessageDesc>{message.desc}</StyledVoteMessageDesc>
            <StyledVoteMessageBtnWrap>
                <Button onClick={() => setUpvote(upvote + 1)}>
                    ↑ { upvote > 0 ? <Count>{upvote}</Count> : null }
                </Button>
                <Button onClick={() => setDownvote(downvote + 1)}>
                    ↓ { downvote > 0 ? <Count>{downvote}</Count> : null }
                </Button>
            </StyledVoteMessageBtnWrap>
        </>
    )
}

export default VoteMessage;
