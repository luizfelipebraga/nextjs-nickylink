import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    } 

  :root {
    //Primary
    --bg: #18181b;
    --text-p: #878788;
    --text-bold: #f4f4f4;
    --darkBlue: hsl(233, 26%, 24%);
    --lightGreen: hsl(136, 65%, 51%);
    --lightCyan: hsl(192, 70%, 51%);
    //Neutral
    --grayBlue: hsl(233, 8%, 62%);
    --gray: #7a7a7a;
    --lightGrayBlue: hsl(220, 16%, 96%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
    --black: #000;
  }
  
    html, body, #root {
        min-height: 100vh;
        width : 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        background: var(--bg);
    }

    body {
        &::-webkit-scrollbar {
            width: .8rem;
        }
        &::-webkit-scrollbar-track {
            background: var(--bg);
        }
        &::-webkit-scrollbar-thumb {
            background-color: #9d9d9d;
            width: .3rem;    
            border-radius: 1rem;
        }
    }

    li {
        list-style-type: none;
    }

    span, button, p  {
        color: var(--text-p);
    }
    p {
        line-height: 1.8rem;
    }
    b, strong {
        color: var(--text-bold);
    }
    textarea {
        resize: none;
    }
    
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        color: var(--white);
        transition: all 5000s ease-in-out 0s;
    }
    textarea, select, input, textarea, select:focus, button{
        border: 0;
        outline: none;
    }

    a {
        list-style: none;
        text-decoration: none;
        cursor: pointer;
    }
`;
