//Bring all the files together in one setup export
import {css} from "styled-components";
import reset from "./reset";
import { bodyFont, colors, headerFont, MAX_WIDTH, MIN_WIDTH } from "./variables";

export default css`
   ${reset};

   * {
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   html, body {
      font: 1.6rem ${bodyFont};
      color: ${colors.bodyColor};
      background-color: ${colors.bgColor};
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
      text-align: center;
   }
`;