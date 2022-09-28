import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledCardList = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${COLORS.color};
  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
  }
`;
