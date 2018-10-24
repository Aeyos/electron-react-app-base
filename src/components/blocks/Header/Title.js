import styled from 'styled-components';

const Title = styled.span`
    color: ${props => props.theme.stripeColor};
    font-size:  ${props => props.theme.fontSize.title};
`;

export default Title;