import React from "react"
import styled from "styled-components";

//Styled Components
const Wrapper = styled.div`
   margin: 20px;
   background-color: magenta;

   img {
      width:100%;
      max-width: 200px;
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