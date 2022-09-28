import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledFooter = styled.footer`
  font-family: "Gilroy";
  padding: 100px 0;
  margin-top: 100px;
  background-color: ${COLORS.main};
  .navigation,
  .contact {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: center;
  }
  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: ${COLORS.white};
    margin: 7px 0px;
  }
  .footer_heading {
    font-weight: 600;
    font-size: 24px;
    line-height: 120%;
    color: ${COLORS.white};
  }
  .footer_social_heading {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.white};
  }
  .social_icons {
    display: flex;
    align-items: center;
    justify-content: start;
    div {
      margin: 0 4px;
      width: 39px;
      margin: 15px 4px;
      height: 39px;
      border-radius: 39px;
      background-color: ${COLORS.white};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img {
        width: 10px;
      }
    }
  }
  .message_btn {
    background-color: ${COLORS.white};
    border-radius: 6px;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: ${COLORS.main};
    border: none;
    outline: none;
    padding: 14px 30px;
    cursor: pointer;
  }
  .form_sub {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ant-modal-content {
    border-radius: 90px;
  }
  .socials_media,
  .contact_message {
    margin: 20px 0px;
  }
  
  @media only screen and (max-width: 768px) {
    padding: 28px 0;
  }
`;
