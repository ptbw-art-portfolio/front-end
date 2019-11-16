//Bring all the files together in one setup export
import {css} from "styled-components";
import reset from "./reset";
import { bodyFont, colors, headerFont } from "./variables";

export default css`
   ${reset};

   & {
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
`;