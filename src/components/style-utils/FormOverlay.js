import styled from "styled-components";
import {colors} from "./variables";
// import {} from "./mixins";

export default styled.div`
   background: ${colors.overlayBackground[1]};
   background: radial-gradient(
      circle, 
      ${colors.overlayBackground[0]} 0%, 
      ${colors.overlayBackground[1]} 65%, 
      ${colors.overlayBackground[1]} 95%, 
      ${colors.overlayBackground[2]} 100%
   );
   z-index: 1;
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   overflow: auto;
   display: flex;
   justify-content: center;
   align-items: center;
`;