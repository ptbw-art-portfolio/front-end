import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import { bodyFont, colors, headerFont, MIN_WIDTH, MAX_WIDTH } from "./variables";

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Cabin|Roboto+Condensed&display=swap');

   ${reset}

   * {
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   html, body {
      font-family: ${bodyFont};
      color: ${colors.bodyColor};
      /* background-color: ${colors.bgColor}; */
   }

   body {
      height: 100%;
      margin: 0;
      background-repeat: no-repeat;
      background-attachment: fixed;
      /* background-image: linear-gradient(to bottom right, #b7b6c1, #94958b); */
   }

   h1, h2, h3, h4, h5 {
      font-family: ${headerFont};
      color: ${colors.headerColor};
      font-weight: bold;
   }

   h1 {
      font-size: 3.2rem;
   }

   h2 {
      font-size: 2.6rem;
   }

   h3 {
      font-size: 2.0rem;
   }

   h4 {
      font-size: 1.6rem;
   }

   p {
      font-size: 1.6rem;
   }

   .content {
      background-color: ${colors.attentionColor};
      color: ${colors.lightText};
      margin: 0 auto;
      min-width: ${MIN_WIDTH};
      max-width: ${MAX_WIDTH};
   }
`;
