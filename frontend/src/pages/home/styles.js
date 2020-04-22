import styled from 'styled-components';
import background from '../../assets/connection.svg';
import wave from '../../assets/wave.svg';

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

`;

export const Main = styled.div`
    height: 100%;
    width: 90%;
    background-image: url('${background}');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 200px;
@media only screen and (min-width: 700px) {
    justify-content: flex-start;
}
@media only screen and (max-width: 700px) {
    justify-content: center;
    background-position-x: center;
    background-position-y: top;
    background-size: 50%;
}

`;
