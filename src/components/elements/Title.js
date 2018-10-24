import styled from 'styled-components';

const Title = styled.h1`
    font-size: ${p => p.theme.fontSize.big};
    margin: 0;

    &:after {
        content: ' ';
        background: ${p => p.theme.accentColor};
        display: block;
        height: 5px;
        width: 50px;
    }
`;

export default Title;
