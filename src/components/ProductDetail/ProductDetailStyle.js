import styled from "styled-components";

export const ProductDetailStyle = styled.div`
  .detail-heading {
    padding: 15px 7px;
    display: flex;
    border-bottom: 1px solid;
    .heading-images {
      width: 50%;
      display: flex;
      .ant-image {
        width: 80%;
        cursor: pointer;
        height: 100%;
        img {
          width: 100%;
          height: 80%;
          object-fit: cover;
        }
      }
      div {
        width: 20%;
        margin: 8px;
        display: flex;
        flex-direction: column;
        img {
          width: 100%;
        }
      }
    }
    .heading-info {
      width: 50%;
      display: flex;
      flex-direction: column;
      padding: 25px 0;
      justify-content: space-between;
      button {
        background: ${(props) => props.color};
        border: 1px solid #000000;
        border-radius: 8px;
      }
      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 1.4;
      }
      h4 {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 46px;
      }
      button {
        width: 50%;
        margin-top: 15px;
      }
    }
    @media only screen and (max-width:768px) {
      flex-direction: column;
      .heading-images {
        width: 100%;
      }
      .heading-info {
        width: 100%;
      }
    }
  }
  .detail-body {
    p {
      font-size: 15px;
      font-weight: 300;
    }
    &:nth-child(2) {
      max-height: 200px;
      overflow-y: scroll;
    }
  }
`;
