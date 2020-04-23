import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

`;
export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    height: 10%;
`;
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;
export const Title = styled.h3`
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`;
export const Button = styled.button`
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
