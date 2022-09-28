import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledNews = styled.div`
  margin: 20px 0px;
  .img_card {
    border-radius: 8px;
    max-width: 692px;
    width: 100%;
    height: 432px;
    margin-bottom: 20px;
    img {
      max-width: 692px;
      width: 100%;
      height: 432px;
      object-fit: cover;
    }
  }
  .date {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #999999;
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 103.5%;
    color: #333333;
  }
  .sub_title {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #999999;
  }
  .img_card_small {
    margin: 5px;
    img {
      max-width: 180px;
      width: 100%;
      height: 120px;
      object-fit: cover;
    }
  }
  .other_news {
    width: 80%;
    h4 {
      font-style: normal;
      font-weight: 700;
      font-size: 22px;
      line-height: 32px;
      color: #333333;
    }
  }
`;
