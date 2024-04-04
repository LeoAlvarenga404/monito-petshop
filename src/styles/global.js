import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased
  }

  :root {
    font-size: 62.5%;
  }

  body, button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`