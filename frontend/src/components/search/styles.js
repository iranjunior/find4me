import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 8px;
    width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 1em;

`;

export const Input = styled.input`
    width: calc(80% - 22px);
    height: 46px;
    padding: 0;
    padding-left: 20px;
    color: #777;
    font-size: 18px;
    text-transform: lowercase;
    box-shadow: 1px 1px 5px 1px #cacaca;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-style: none;
    ${(props) => props.validate === false && css`
        border:1px solid red;
    `}
    border:1px solid transparent;

    :hover {
        border:1px solid ${(props) => props.theme.colors.focus};
        box-shadow: 1px 1px 10px 1px ${(props) => props.theme.colors.focus};
        transition: box-shadow 500ms;
    }

    @media only screen and (max-width: 1400px){
        height: 35px;
        font-size: 15px
    } 
    @media only screen and (max-width: 1024px){
        height: 30px;
        font-size: 14px;
        width: 80%;  
    }
    @media only screen and (max-width: 700px){
        height: 30px;
        font-size: 10px;
        width: 70%;  
    }
`;
export const Submit = styled.button`
    width: 20%;
    padding: 0;
    border-style: unset;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: ${(props) => props.theme.colors.background.primary};
    box-shadow: 1px 1px 5px 1px #cacaca;
        :hover {
            cursor: pointer;
            box-shadow: 1px 1px 10px 1px ${(props) => props.theme.colors.background.primary};
            transition: box-shadow 500ms;
        }

    @media only screen and (max-width: 1400px){
        height: 35px;
        width: 70px;
    } 
    @media only screen and (max-width: 700px){
        height: 30px;
        width: 50px;
    } 
`;
export const Logo = styled.img`
    height: 100%;
    width: 100%;
`;
