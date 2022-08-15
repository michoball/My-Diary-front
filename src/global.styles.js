import { createGlobalStyle, css } from "styled-components";

export const rotation = css`
  transform: rotate3d(-1, 1, 0, 5deg);
  box-shadow: -5px -5px 10px rgba(0, 0, 0, 0.5);
`;
export const border = css`
  border: 3px solid #f2a7a7;
  border-radius: 10px;
`;

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'SBAggroL';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroL.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  font-family: 'SBAggroL',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #d2d2d2;

}
button{
  font-family: 'SBAggroL',
    sans-serif;
}
a{
  text-decoration: none;
  color: black;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
   scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f2a7a7;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  }
   ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }


`;
