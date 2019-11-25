import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

//*** Component Styles ***//
import styled from "styled-components";
import { customLayout } from "./style-utils/mixins";

const Wrapper = styled.div`
   width: 100%;
   height: 20rem;
   max-height: 480px;
   ${customLayout("center", "center")}
`;

function Spinner () {
   return (
      <Wrapper>
         <FontAwesomeIcon icon={faSpinner} pulse size="6x" />
      </Wrapper>
   );
}

export default Spinner;