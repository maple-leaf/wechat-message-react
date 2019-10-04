import { useState, useMemo } from 'react';
import { Role } from './wechat-message';
import styled from 'styled-components';

export interface IEnvelopeMessage {
    takeBy: string,
    envelopeId: number,
    type: string,
    role: Role.system,
}
export interface EnvelopeMessageProps {
    message: IEnvelopeMessage,
    className?: string,
}

const StyledEnvelopeMessage = styled.div`
    font-size: 12px;
    color: #000;
    background: rgba(255, 255, 255, 0.5);
    line-height: 30px;
    display: inline-block;
    padding: 0 12px;
`;

const StyledEnvelopeLink = styled.a`
    color: #FF9800;
    text-decoration: none;
`;

// 红包被领通知
const RedEnvelope = ({ message }: EnvelopeMessageProps) => {
    const { takeBy, envelopeId  }= message;
    return (
        <StyledEnvelopeMessage>
            {takeBy} 领取了你的 <StyledEnvelopeLink href={'#' + envelopeId}>红包</StyledEnvelopeLink>
        </StyledEnvelopeMessage>
    )
}

const SystemMessage = ({ message }: SystemMessageProps):React.ReactElement => {
    switch(message.type){
        case 'envelope':
            return <RedEnvelope message={message}/>
        default:
        return null;
    }
}

export default SystemMessage;
