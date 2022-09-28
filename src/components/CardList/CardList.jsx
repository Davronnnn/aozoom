import React from "react";
import { StyledContainer } from "../../styles/Container.style";
import { StyledCardList } from "./CardList.style";

export default function CardList(props) {
  const { heading, img, text } = props;
  const style = {
    width: " 80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <StyledCardList>
      <img src={img} alt="walpaper" />
      <h5>{heading}</h5>
      <p
        style={{ fontSize: "15px", width: "62%", textAlign: "center" }}
        className="aboutText"
      >
        {text}
      </p>
    </StyledCardList>
  );
}
