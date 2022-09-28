import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledPageHeader = styled.div`
  margin-bottom: 50px;
  margin-top: 110px;
  h2 {
    font-weight: 600;
    font-size: 48px;
    line-height: 103.5%;
    color: ${COLORS.darkGrey};
  }
  @media screen and (max-width:768px) {
    margin-bottom: 18px;
    margin-top: 43px;
    h2 {
      font-weight: 600;
      font-size: 24px;
    }
  }
`;
