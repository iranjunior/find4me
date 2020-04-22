import styled from 'styled-components';

export const Container = styled.div`
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
export const Image = styled.img`

@media only screen and (min-width: 1400px) {
    height: ${(props) => props.height || props.size || '16em'};
    width: ${(props) => props.width || props.size || '18em'};
    }

@media only screen and (max-width: 1400px) {
    height: ${(props) => props.height || props.size || '8em'};
    width: ${(props) => props.width || props.size || '10em'};
    }
`;
