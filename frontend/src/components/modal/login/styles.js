import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 10%;
`;
export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 5em 0;
`;

export const Title = styled.h3`
    font-size: 1.5em;
    font-weight: 700;
    margin: 0;
    margin-top: 1em;
`;
export const Feedbacks = styled.div`
    height: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
export const ButtonBack = styled.button`
    height: 2em;
    width: 2em;
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2em;
`;
export const WrapperLinks = styled.div`
    display: flex;
    margin-top: 1.2em;
    justify-content: space-between;
`;
