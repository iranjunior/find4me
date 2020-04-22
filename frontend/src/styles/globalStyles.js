import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
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
    /* width */
    ::-webkit-scrollbar {
      width: 0px;
    }
`;
