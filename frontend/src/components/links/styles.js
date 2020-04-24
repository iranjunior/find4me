import styled from 'styled-components';

export default styled.a`
    font-weight: 700;
    font-size: 1em;
    text-decoration: none;
    color: ${(props) => props.theme.colors.background.primary};
`;
