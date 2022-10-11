import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledExchange = styled.div`
  .wrapper {
    background-color: ${COLORS.white};
    padding: 20px 40px;
  }
  header {
    padding: 5px 30px;
    margin: 20px 0px;
    h1 {
      font-weight: 400;
      font-size: 36px;
      line-height: 42px;
      color: ${COLORS.black};
      margin: 0px;
    }
  }
  .add_price{
    margin: 15px 0px;
    cursor: pointer;
  }
  .pagination_block{
    margin-top: 15px;
  }
`;

export const StyledExchangeDetails = styled.div`
  margin: 4px 0px;
  display: flex;
  align-items: center;
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${COLORS.black};
    margin-top: 18px;
  }
  .respons_label{
    display: none;
  }
  .unrespons_label{
    display: block;
  }
  .productName,
  .productPrice,
  .productPercentage {
    display: flex;
    align-items: center;
    margin: 10px 12px;
    label {
      margin: 0px 8px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: ${COLORS.black};
    }
  }

  @media only screen and (max-width: 992px) {
    display: block !important;
    .respons_label{
        display: block !important;
    }
    .unrespons_label{
        display: none !important;
    }
  }
`;
