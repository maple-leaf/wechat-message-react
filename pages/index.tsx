import styled from 'styled-components';
import Icon, { ICONS } from 'components/icon';
import WeChatPanel from 'components/wechat-panel';

const Title = styled.div`
    font-size: 24px;
    color: #000;
    border-bottom: 2px solid rgba(0, 0, 0, .3);
`;

const StyledWeChatPanel = styled(WeChatPanel)`
    height: 667px;
    width: 375px;
    margin: 20px auto;
`;

function Home() {
    return (
        <>
            <Title>Wechat messager react component demo</Title>
            <StyledWeChatPanel/>
        </>
    )
}

export default Home
