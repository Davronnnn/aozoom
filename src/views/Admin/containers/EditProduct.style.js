import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const EditProStyle = styled.div`
  .left_side,
  .right_side {
    background: #eceef0;
    border-radius: 10px;
    padding: 15px;
  }
  .status_product {
    margin: 15px 0px;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 7px;
    padding: 15px 20px;
    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 28px;
      color: ${COLORS.black};
    }
  }
  .select_category {
    outline: none;
    border: none;
    width: 167px;
    height: 33px;
    background: #364a7e;
    border-radius: 7px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: #ffffff;
  }
  .img_upload {
    width: 156px;
    height: 138px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${COLORS.white};
    cursor: pointer;
    input {
      display: none;
    }
  }
  .imgs_block {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
  }
  .sbm_btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
