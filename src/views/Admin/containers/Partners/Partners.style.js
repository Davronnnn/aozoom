import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledPartners = styled.div`
  header {
    padding: 5px 30px;
    background-color: ${COLORS.main};
    margin: 20px 0px;
    h1 {
      font-weight: 400;
      font-size: 36px;
      line-height: 42px;
      color: ${COLORS.white};
      margin: 0px;
    }
  }
  .ant-table-thead {
    display: none;
  }
  .ant-table-tbody {
    tr:nth-child(even) {
      background-color: #d9d9d9;
    }
  }
  .wrapper {
    background-color: ${COLORS.white};
    padding: 50px;
  }
  .ant-table-cell {
    cursor: pointer;
  }
  .modal_body {
    h5 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: ${COLORS.black};
    }
  }
  .pagination_block{
    margin-top:15px;
  }
`;
