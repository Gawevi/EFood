import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const cores = {
  laranja: '#E66767',
  branco: '#ffffff',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.laranja};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  height: 57.5px;
  width: 125px;
`
