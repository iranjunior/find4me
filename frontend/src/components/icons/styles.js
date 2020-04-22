import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.icons.primary};
    svg {
            height: 2em;
            width: 2em;
    }
    @media only screen and (min-width: 1400px) {
        svg {
            height: 2.5em;
            width: 2.5em;
        }
    }
    @media only screen and (max-width: 700px) {
        svg {
            height: 1.5em;
            width: 1.5em;
        }
    }
`;
