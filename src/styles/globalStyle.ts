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
    --darkBlue: hsl(233, 26%, 24%);
    --lightGreen: hsl(136, 65%, 51%);
    --lightCyan: hsl(192, 70%, 51%);
    //Neutral
    --grayBlue: hsl(233, 8%, 62%);
    --lightGrayBlue: hsl(220, 16%, 96%);
    --veryLightGray: hsl(0, 0%, 98%);
    --white: hsl(0, 0%, 100%);
  }
  
    html, body, #root {
        min-height: 100vh;
        width : 100%;
        overflow-x: hidden;
        scroll-behavior: smooth;
        background: #18181b;
    }

    body {
        &::-webkit-scrollbar {
            width: .5rem;
        }
        &::-webkit-scrollbar-track {
        background: #0d0d0e;
        }
        &::-webkit-scrollbar-thumb {
        background-color: #fff;
        width: 1rem;
        border-radius: 1rem;
        border: 1px solid #000;
        }
    }

    span, button, p  {
        color: #949494;
    }
    p {
        line-height: 1.8rem;
    }
    b, strong {
        color: #fff;
    }
    textarea {
        resize: none;
    }
    .glider-dot.active {
        background: #041e50;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        color: #fff;
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
