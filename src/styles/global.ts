import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --f-min: 0.75rem; //12px
    --f-smal: 0.875rem; //14px
    --f-normal: 1rem; //16px
    --f-media: 1.25rem; //20px
    --f-media-large: 2rem; //32px
    --f-extra-large: 3rem; //48px
    --max-width-desktop: calc(1216px + 72px * 2 );
    --max-width-tablet: calc(959px + 32px * 2 );
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  /*
  font-family: ${props => props.theme.fonts.Montserrat};
  font-family: ${props => props.theme.fonts.SourceSansPro};
  */

  body {
    background: #FFFFFF;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    #__next {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        display: grid;
        row-gap: 90px;
    }
  }
  .down {
    transition: all 0.3s;
    &:hover {
        transform: translateY(-2px);
    }
  }
  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
  }
`;
