import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledApplication = styled.div`
  .ant-modal-body {
    .question_block {
      background: ${COLORS.white};
      border: 1px solid ${COLORS.black};
      border-radius: 8px;
      padding: 20px;
      color: ${COLORS.red};
      text-align: center;
    }
  }
  .wrapper {
    background-color: ${COLORS.white};
    padding: 50px;
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
  }
  .ant-table-tbody {
    tr:nth-child(even) {
      background-color: #d9d9d9;
    }
  }
  .ant-table-thead {
    display: none;
  }
  .pagination_block{
    margin-top: 15px;
  }
`;
