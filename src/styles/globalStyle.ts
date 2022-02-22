import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Public Sans', sans-serif;
    } 

  html.sr .load-hidden {
      visibility: hidden;
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
    &::-webkit-scrollbar {
        display: none;
    }
      
    min-height: 100vh;
    width : 100%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  span, button, p  {
    color: #949494;
  }
  p {
      line-height: 1.8rem;
  }
  b, strong {
      color: #000;
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
  @media (min-width: 1600px) {
      html {
      }
  }
  @media (max-width: 1200px) {
      html {
      }
  }
  @media (max-width: 1024px) {
      html {
      }
  }
  @media (max-width: 768px) {
      html {
      }
  }
  @media (max-width: 480px) {
      html {
      }
  }
  @media (max-width: 320px) {
      html {
      }
  }
`;
