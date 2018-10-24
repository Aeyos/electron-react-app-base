import styled from 'styled-components';
import Title from './Title';

const Header = styled.div`
    background: ${props => props.theme.backgroundStripeColor};
    padding: ${props => props.theme.spacing.big};
`;

Header.Title = Title;

export default Header;