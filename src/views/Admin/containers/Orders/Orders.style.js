import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledOrders = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  .wrapper {
    width: 100%;
    header {
      background-color: ${COLORS.main};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        margin: 0px;
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 37px;
        color: ${COLORS.white};
      }
    }
  }
  .modalInfo {
    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: ${COLORS.black};
    }
  }
  .search_block {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-top: 20px;
    div {
      position: relative;
      background: #ffffff;
      border-radius: 10px;
      height: 40px;
      max-width: 700px;
      width: 100%;
      padding: 0px 10px;
      margin: 0px 10px;
      input {
        position: absolute;
        outline: none;
        border: none;
        height: 90%;
        width: 90%;
      }
    }
    h3 {
      margin: 0px 10px;
    }
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: ${COLORS.black};
  }
  .table_block {
    margin: 35px 0px;
  }
  .ant-table-cell {
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 32px;
      line-height: 38px;
      color: ${COLORS.black};
    }
    h4 {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;

      color: ${COLORS.black};
    }
  }
  .order_payment {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .pagination_block{
    margin-top: 15px;
  }
`;
