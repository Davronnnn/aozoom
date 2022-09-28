import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledHome = styled.div`
header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
}
  .top_block {
    margin: 30px 0px;
  }
  .best_seller, .search_block {
    margin: 30px 0px;
    background-color: ${COLORS.white};
    border-radius: 5px;
    padding: 30px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    .ant-table-thead {
        border-radius: 5px;
      tr {
        background-color: ${COLORS.lightGrey};
        th {
          color: ${COLORS.lightBlue};
          font-weight: 300;
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
    .antd-table-tbody {
      tr {
        th {
          font-weight: 300;
          font-size: 16px;
          line-height: 18px;
        }
      }
    }
    .ant-table-cell {
      div {
        img {
          width: 27px;
          height: 25px;
        }
      }
    }
  }
`;
