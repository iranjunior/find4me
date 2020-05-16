import styled, { keyframes, css } from 'styled-components';

const animation = keyframes`
    0% {
        transform: translateY(0) scale(1);
        clip-path: circle(25%);
    }
    100% {
        clip-path: circle(50% at 50% 50%);
        transform: translateY(-2em) scale(0.5);
    }

`;


export const Card = styled.div`
    width: 20em;
    height: 30em;
    background-color: white;
    margin-top: 30px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 2px 2px 3px 0px gray,
                0px 0px 3px 0px lightgray;
    :hover {
        cursor: pointer;
    }

    @media only screen and (max-width: 700px) {
        
    }
`;
export const Reference = styled.label`
    margin: 10px 0;
    overflow-x: hidden;
`;

export const Links = styled.a`
    font-weight: 300;
    margin-top: 20px;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
`;
export const References = styled.div`
    flex-direction: column;
    display: flex;
    flex-wrap: nowrap;
    margin: 10px 0;
`;

export const Title = styled.h3`
    @media only screen and (min-width: 700px) {
        font-size: 1.15em;
    }
    @media only screen and (max-width: 700px) {
        font-size: .75em;
        text-align: end;
        padding-right: 2em;
    }
`;
export const Subtitle = styled.h4`
    margin: 0;
    font-weight: 200;
`;

export const CardHeader = styled.div`
    position: absolute;
    top: 1;
    height: 20em;
    width: calc(20em);
    background-image: url(${(props) => props.photo});
    background-size: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease;

    ${(props) => props.animation && css`
        clip-path: circle(50% at 50% 50%);
        transform: translateY(-5em) scale(0.5);
    `
}
@media only screen and (max-width: 700px) {
        
    }

`;
export const Decision = styled.a`
    font-weight: 300;
    margin-top: 20px;
    :hover{
        text-decoration: underline;
    }
`;
export const CardContent = styled.div`
    width: calc(20em - 2em);
    transform: translateY(8em);
    background: #fff;
    position: relative;
    bottom: -30%;
    z-index: 100;
    padding: 0em 1em;
    border-radius: 2em;
    flex-direction: column;
    transition: all 500ms ease;
    transition-delay: 200ms;
    overflow: hidden;

    ${(props) => props.animation && css`
        transform: translateY(1em);
    `}
    
    @media only screen and (max-width: 700px) {
        
    }
`;

export const Content = styled.p`
    font-weight: 400;
    :hover {
        cursor: pointer;
    }
    @media only screen and (min-width: 700px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 700px) {
        font-size: 12px;
    }
`;
export const Chip = styled.div`
    display: flex;
    padding: 1em;
    background-color: ${(props) => props.theme.colors.background.primary};
    border-radius: calc((2em + 1em) / 2);
    color: white;
    font-weight: 800;
    font-size: 0.8em;
    margin-top: .5em;
    margin-right: .5em;
    white-space: nowrap;
`;
export const CardFooter = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    max-height: 0em;
    transition: max-height 1s ease;

    ${(props) => props.animation && css`
        max-height: 10em;
    `}
    @media only screen and (min-width: 700px) {
        font-size: 16px;
    }
    @media only screen and (max-width: 700px) {
        
    }
`;

export const ImageProfile = styled.img`
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 5px gray;
`;
