import styled from "styled-components";
import COLORS from "../../../../constants/colors";

export const StyledNews = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;
    }
  }
  .no_data {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 46px;
    }
  }
  .main {
    background-color: ${COLORS.white};
    padding: 25px;
    display: flex;
    flex-direction: column;
  }
  .news {
    padding: 15px 25px;
    border: 1px solid #d9d9d9;
    margin: 12px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 103.5%;
    }
    .description {
      font-family: "Gilroy";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 103.5%;
    }
    div {
      margin: 15px;
    }
    .news_img {
      width: 200px;
      object-fit: cover;
      height: 170px;
    }
    .news_handle {
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-top: 10px;
        margin: 0px 6px;
      }
      svg {
        margin: 0px 6px;
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .news {
      flex-wrap: wrap;
    }
  }
`;

export const StyledAddNews = styled.div`
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
  .input_block {
    margin-top: 12px;
    .date_block {
      display: flex;
      align-items: center;
      input {
        width: 30%;
        margin-left: 22px;
      }
    }
  }
  .add-button {
    position: absolute;
    right: 35px;
    padding: 5px 15px;
    background: ${COLORS.main};
    border: none;
    color: #fff;
    cursor: pointer;
    border-radius: 5px;
    z-index: 1000;
  }
  .submit_btn {
    margin-top: 16px;
  }
`;
