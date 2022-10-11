import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledPurchases = styled.div`
  header {
    .title {
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 120%;
      color: ${COLORS.black};
    }
  }
  .search_block {
    margin: 15px 0px;
    width: 100%;
    max-width: 700px;
    background-color: ${COLORS.white};
    border-radius: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    input {
      outline: none;
      border: none;
      background-color: transparent;
      width: 100%;
      width: 90%;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
      color: ${COLORS.grey};
    }
  }
  .ant-table-thead {
    display: none;
  }
  .product_price {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.grey};
  }
  .edit_column {
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      margin: 0px 6px;
      cursor: pointer;
      padding: 6px;
    }
  }
  .img_column {
    display: flex;
    align-items: center;
  }
  .product_img {
    margin: 0px 25px;
    width: 65px;
    height: 65px;
  }
  .product_name {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.black};
  }
  .pagination_block{
    margin: 15px 0px;
  }
`;
