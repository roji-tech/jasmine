import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Satisfy&display=swap");

  :root {
  --bg-light: rgb(272, 231, 171);
  --bg-white: rgb(211, 155, 211);
  --bg-image: url(./imgs/subtle-prism.svg);
  --bg-dark:  #003e29;
  --bg-gray: rgb(85, 92, 80);
  --color-1: rgba(0, 239, 139, 0.456);
  --color-2: rgba(0, 0, 0, 0.256);
  --color-3: rgba(255, 250, 240, 0.456);
  --btn-color-1: rgba(34, 255, 0, 0.642);
  --btn-color-2: #05386b;
  --btn-color-4: #0d74dc;
  --btn-color-3: rgb(0, 255, 0);
  --maxWidth: 1280px;
  --darkGrey: #1c1c1c;
  --fontSuperBig: 2.5rem;
  --fontBigger: 2rem;
  --fontBig: 1.7rem;
  --fontMed: 1.3rem;
  --fontSmall: 1.1rem;
  --fontSuperSmall: .8rem;
  }

  * {
  padding: 0;
  border: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg-dark);
    color: var(--bg-light);

    .head{
      font-size: 2rem;
      padding: 20px;
    }
    
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default GlobalStyle;
