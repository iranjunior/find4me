import styled, { keyframes, css } from 'styled-components';
import wave from '../../assets/wave.svg';

const animation = keyframes`
    0% {
        background-position-y: bottom;   
    }
    100% {
        background-position-y: 50em;   
    }
`;
const animationReverse = keyframes`
    0% {
        background-position-y: 50em;   
    }
    100% {
        background-position-y: bottom;   
    }
`;
const showContent = keyframes`
    0% {
        opacity: 0;
        transform: translateY(10em);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    background-image: url('${wave}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: right;
    background-position-y: bottom;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${(props) => props.animation && css`
        animation: ${animation} 1s linear;
        animation-fill-mode: forwards;
    `}
    ${(props) => props.reverse && css`
        animation: ${animationReverse} 1s linear;
        animation-fill-mode: forwards;
    `}

`;
export const Header = styled.header`
    height: 10%;
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
export const Main = styled.main`
    height: 90%;
    width: 90%;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 5em;
@media only screen and (min-width: 700px) {
    justify-content: flex-start;
}
@media only screen and (max-width: 700px) {
    justify-content: center;
    background-position-x: center;
    background-position-y: 30%;
    background-size: 50%;
    margin: 0;
}
`;
export const WrapperSearch = styled.div`
    width: 40%;
    margin: 0 auto;

    @media only screen and (max-width: 1024px){
        width: 80%;
    }
`;
export const Content = styled.div`
    display: flex;
    height: 70%;
    overflow: auto;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1em;
    animation: ${showContent} 1s linear;
    animation-fill-mode: forwards;
    padding-bottom: 5em;

    ::before {
        content: '';
        background-color: white;
        position: absolute;
        bottom: -10px;
        left: 25%;
        height: 10px;
        width: 50%;
        border-radius: 100%;
        box-shadow: 0px 0px 100px 50px white;
        z-index: 10000;
    }



    }
    @media only screen and (max-width: 1025px) {
        height: 50%;
    }

    @media only screen and (max-width: 700px) {
        position: relative;
        bottom: -1em;
        height: 80%;
    }
`;
