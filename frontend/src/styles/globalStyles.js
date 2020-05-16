import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Raleway:100,400,500,700,900&display=swap');
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Raleway', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    svg {
      font-family: 'Raleway';
    }
    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    #root {
      height: 100vh;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    ::-webkit-scrollbar {
      width: 5px;
      height: 2px;
    }
    .card__svg {
      position: absolute;
      left: 0;
      top: 115px;
    }
    ::-webkit-scrollbar-track {
      background: #F5F0F0;
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.background.primary};
      border-radius: 1px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${(props) => `${props.theme.colors.background.primary}AA`};
    }
`;
