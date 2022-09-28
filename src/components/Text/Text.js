import React from "react";
import { StyledContainer } from "../../styles/Container.style";
import { StyledText } from "./Text.style";

const Text = (props) => {
  const { heading, text } = props;
  return (
    <StyledContainer>
      <div className="container">
        <StyledText>
          <h1>{heading}</h1>
          <p>{text}</p>
        </StyledText>
      </div>
    </StyledContainer>
  );
};

export default Text;
