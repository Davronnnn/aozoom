import styled from "styled-components";
import COLORS from "../../../constants/colors";

export const StyledNewsCard = styled.div`
  font-family: "Gilroy";
  font-style: normal;
  width: 315px;
  .card_header {
    width: 315px;
    height: 256px;
    img {
      width: 315px;
      height: 256px;
      object-fit: cover;
      border-radius: 7px;
    }
  }
  .news_date {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
    margin: 12px 0px 0px 0px;
  }
  .news_title {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${COLORS.darkGrey};
  }
  .news_subtitle {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #4f4f4f;
  }
`;

export const StyledNewsPage = styled.div`
  .news_wrapper {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 40px;
  }
`;

export const StyledDetails = styled.div`
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    margin: 30px 0px;
    text-align: start;
    font-family: "Gilroy";
    font-style: normal;
    .title {
      font-weight: 600;
      font-size: 45px;
      line-height: 103.5%;
      color: ${COLORS.darkGrey};
    }
    .date {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #4f4f4f;
    }
    .description {
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: ${COLORS.darkGrey};
    }
    .main_img {
      max-width: 1000px;
      max-height: 420px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 40px 0px;
    }
    .secondary_img {
      max-width: 480px;
      max-height: 280px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: 40px 0px;
    }
  }
  .extra_news {
    margin: 20px 0px;
  }
`;
