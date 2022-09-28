import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  text-align: left;
  background-color: ${COLORS.silver};
  padding: 40px 30px;
  width: 100%;
  max-width: 284px;
  height: 255px;
  img {
    margin-bottom: 70px;
  }
  h5 {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.darkGrey};
  }
  @media only screen and (max-width: 576px) {
    max-width: 100% !important;
    img {
      margin-bottom: 15px;
    }
  }
`;
