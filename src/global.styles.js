import { createGlobalStyle, css } from "styled-components";

export const border = css`
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
  background-color: #f3e9e7;
  color: #623933;

}
button{
  font-family: 'SBAggroL',
    sans-serif;
}
a{
  text-decoration: none;
  color: #623933;
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
