//This adds mixin-like functionality to styled-components
import {css} from "styled-components";

//basic mixin (no parameters)
export const autoScale = css`
   height: auto;
   width: auto;
   max-width: 100%;
`;

//mixin with parameters
export const customLayout = (justify, align="flex-start", direction="row", wrap="nowrap") => `
   display: flex;
   flex-flow: ${direction} ${wrap};
   justify-content: ${justify};
   align-items: ${align};
`;