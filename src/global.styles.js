import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
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
  font-family: 'SBAggroL','SBAggroB',sans-serif;
  background-color: ${(props) => props.theme.bg.main};
  color: ${(props) => props.theme.text.content};
}
h1, h2{
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.theme.text.head};
}
button{
  font-family: 'SBAggroL',
    sans-serif;
}
a{
  text-decoration: none;
  color: ${(props) => props.theme.text.content};
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
