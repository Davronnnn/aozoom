import styled from "styled-components";
import COLORS from "../../../../../constants/colors";

export const StyledReportCard = styled.div`
  text-align: left;
  padding: 20px;
  background-color: ${COLORS.white};
  border-radius: 10px;
  h5 {
    color: ${COLORS.grey};
    font-size: 18px;
    line-height: 20px;
  }
  h3 {
    font-size: 24px;
    line-height: 29px;
    color: ${COLORS.lightBlue};
  }
  .card_footer {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 12px;
      margin-right: 7px;
    }
    p{
        margin-top:15px;
        font-size: 18px;
        line-height:20px;
    }
    .increase_amount{
        color: ${COLORS.green};
    }
    .decrease_amount{
        color: ${COLORS.red};
    }
  }
`;
