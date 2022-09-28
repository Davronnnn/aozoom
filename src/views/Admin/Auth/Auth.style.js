import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const StyledSignIn = styled.div`
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 15px 0px;
    p {
      padding: 10px 0px;
      text-align: center;
      font-size: 12px;
    }
    .auth_title {
      font-size: 22px;
      line-height: 27px;
      color: ${COLORS.black};
      padding: 20px 0px;
    }
    .form_block {
      width: 100%;
      max-width: 850px;
      border: 1px solid ${COLORS.darkGrey};
      padding: 70px;
      border-radius: 30px;
      label {
        font-size: 18px;
      }
      /* button {
        font-size: 32px;
        padding: 14px 50px;
        margin: 0px 10px;
      } */
    }
  }
  .sbt_block {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;
