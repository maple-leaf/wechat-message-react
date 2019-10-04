import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

const animationQueue = new Map();

const rules: { [key: string]: string } = {
    '生日快乐': '🎂',
};

const fallingAnimation = keyframes`
    from {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }

    to {
        transform: translate3d(0, 200px, 0);
        opacity: 0;
    }
`;

const Emoji = styled.span.attrs(props => ({
    style: {
        left: `${props.left}px`,
    }
}))`
    animation: ${fallingAnimation} 2s linear;
    position: absolute;
    top: 0;
`;

const EmojiContainer = styled.div.attrs(props => ({
    style: {
        left: `${props.left}px`,
        right: `${props.right}px`,
    }
}))`
    position: fixed;
    top: 40px;
    bottom: 80px;
    pointer-events: none;
`;

function EmojiRain({ emoji }: { emoji: string }) {
    const emojis = new Array(10).fill(emoji);
    const container = document.body.querySelector('#panelContent');
    const rect = container.getBoundingClientRect();
    const width = container.clientWidth;
    const [endCount, setEndCount] = useState(0);
    const renderKey = useMemo(() => Date.now(), []);
    const onAnimationEnd = (index) => {
        let nextCount = endCount + 1;
        const lastKey = Array.from(animationQueue.keys()).pop();
        if (lastKey !== emoji) {
            nextCount = emojis.length;
        }
        setEndCount(nextCount);
        if (nextCount >= emojis.length) {
            animationQueue.delete(emoji);
        }
    };
    const queueKey = animationQueue.get(emoji);
    if (endCount >= emojis.length || (queueKey && queueKey !== renderKey)) {
        return null;
    }

    animationQueue.set(emoji, renderKey);

    return createPortal(
        <EmojiContainer left={rect.left} right={rect.right}>
            {
                emojis.map((e, index) => <Emoji key={index.toString()} left={ Math.random() * width } onAnimationEnd={() => onAnimationEnd(index)}>{e}</Emoji>)
            }
        </EmojiContainer>,
        container
    );
}

export default function useEmojiRain(content: string) {
    const emoji = rules[(content || '').trim()];
    if (emoji) {
        return (DefaultRender) => {
            return (
                <>
                    <DefaultRender/>
                    <EmojiRain emoji={emoji}/>
                </>
            )
        };
    }

    return null;
}
