import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --gray-100: #f2f2f2;
        --gray-200: #d9d9d9;
        --gray-300: #808080;
        --gray-400: #333333;
        --gray-500: #262626;
        --gray-600: #1a1a1a;
        --gray-700: #0d0d0d;
        --purple: #8284fa;
        --purple-dark: #5e60ce;
        --blue: #4ea8de;
        --blue-dark: #1e6f9f;
        --danger: #e25858;
    }

    body {
        background-color: var(--gray-600);
        color: var(--gray-100);
        font-family: 'Inter', sans-serif;
        min-height: 100vh;
        -webkit-font-smoothing: antialiased;
    }

    button {
        cursor: pointer;
    }
`;
 
export default GlobalStyle;