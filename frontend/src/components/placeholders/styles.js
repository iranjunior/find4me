import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
        transform: translateY(0px);
        opacity: 1;
    }
    100% {
        transform: translateY(-30px);
        opacity: 0;
    }
`;

export const Container = styled.div`
    display: ${(props) => (props.active ? 'flex' : 'none')};
    flex-direction: row;
    position: absolute;
    z-index: 100;
    height: 30px;
    margin: 15px 10px;
    color: gray;
`;
export const Texts = styled.li`
    margin-bottom: 10px;
    animation: ${animation} 0.3s ease-in-out;
    animation-delay: 1.7s; 
`;
export const WrapperTexts = styled.ul`
   list-style: none;
   padding: 0 10px;
   margin: 0;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
`;
