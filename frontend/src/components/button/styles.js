import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: ${(props) => props.theme.sizes.button.width[props.size] || '4em'};
    height: ${(props) => props.theme.sizes.button.height || '4em'};
    margin-top: 20px;
`;
export const Button = styled.button`
    height: 100%;
    width: 100%;
    font-weight: 700;
    font-size: 22px;
    border-radius: .5em;  
    
    ${(props) => props.typeButton === 'fill' && css`
      background: ${props.theme.colors.background.primary};
      color: #fff;
      border: none;
      `
}
    ${(props) => props.typeButton === 'outline' && css`
      background: transparent;
      border: 2px solid ${props.theme.colors.background.primary};
      color: #328b21;
      `
}
    ${(props) => props.typeButton === 'icon' && css`
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: none;
        margin-right: 20px;
    `}
    ${(props) => props.disabled && css`
        opacity: 0.3;
    `}
  `;
