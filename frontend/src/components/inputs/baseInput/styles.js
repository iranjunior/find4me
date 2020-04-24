import styled, { keyframes, css } from 'styled-components';

const animationLabelExplain = keyframes`
  0% {
    transform: translateY(calc(${(props) => props.theme.sizes.input.height} || '4em' / 2));
    color: gray;
  }
  100% {
    transform: translateY(0.8em);
    font-weight: 700;
    color: #6c63ff;
    font-size: 12px;
  }
`;
const animationInputExplain = keyframes`
  0% {
    border: 1px solid gray;
  }
  100% {
    border: 2px solid #6c63ff;
    outline: none;
  }
`;


const animationInputContrain = keyframes`
  0% {
    border: 2px solid #6c63ff;
  }
  100% {
    border: 1px solid gray;
  }
`;

const animationLabelContrain = keyframes`
  0% {
    transform: translateY(0.8em);
    color: #6c63ff;
    outline: none;
    font-size: 12px;
  }
  100% {
    transform: translateY(calc(${(props) => props.theme.sizes.input.height} || '4em' / 2));
    color: gray;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => props.theme.sizes.input.height || '2.1em'};
  width: ${(props) => props.theme.sizes.input.width || '20em'};
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type || 'text',
}))`
  height: 100%;
  width: 100%;
  border: 1px solid gray;
  border-radius: .5em;
  padding-left: 1em;
  outline: 0;

  ${(props) => props.explain && css`
    animation: ${animationInputExplain} .3s ease-in-out;
    animation-fill-mode: forwards;
  `}
  ${(props) => props.contrain && css`
    animation: ${animationInputContrain} .3s ease-in-out;
    animation-fill-mode: forwards;
  `}
`;
export const Label = styled.label`
    background: #fff;
    margin-left: .5em;
    padding: 0px 2px;
    width: fit-content;
    transform: translateY(calc(${(props) => props.theme.sizes.input.height || '4em'} / 2));
    transition: all 0.5s ease-in-out;

    ${(props) => props.explain && css`
      animation: ${animationLabelExplain} .3s ease-in-out;
      animation-fill-mode: forwards;
    `}
    ${(props) => props.contrain && css`
      animation: ${animationLabelContrain} .3s ease-in-out;
      animation-fill-mode: forwards;
    `}
`;
