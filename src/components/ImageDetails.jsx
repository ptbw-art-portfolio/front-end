import React from "react"
import styled from "styled-components";
import { autoScale, customLayout } from "./style-utils/mixins";

//Styled Components
const Wrapper = styled.div`
   margin: 20px;
   background-color: magenta;

   ${customLayout("center")}

   img {
      ${autoScale}

      @media only screen and (min-width: 1600px) {
         max-width: 1600px;
      }
   }
`;

function ImageDetails () {
   return (
      <Wrapper>
         {/* <p>Details page</p> */}
         <img src="https://via.placeholder.com/1600x900" alt="A dove" />
      </Wrapper>
   );
}

export default ImageDetails;