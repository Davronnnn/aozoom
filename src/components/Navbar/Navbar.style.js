import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledNavbar = styled.div`
  background-color: ${COLORS.white};
  margin: 0px;
  min-height: 100px;
  padding-top: 10px;
  padding-bottom: 25px;
  box-shadow: 0px 7px 65px rgba(0, 0, 0, 0.06);
.logoImgHref{
@media only screen and (max-width: 992px) {
  display: none;
}
}
  .user-account {
    button {
      max-width: 196px;
    }
  }
  select {
    opacity: 1;
    font-size: 1rem;
    outline: none;
    box-shadow: none;
    cursor: pointer;
    font-weight: 500;
    max-width: 100%;
    padding: 8px 10px;
    color: #36497e;
    border: none;
    background-color: transparent;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid #36497e;
    border-radius: 4px;
  }
  .user-account,
  .user-shopCart {
    button {
      padding: 12px;
      border: none;
      outline: none;
      margin: 0px 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 21px;
      color: ${COLORS.white};
      background-color: ${COLORS.main};
      border-radius: 10px;
      svg {
        path,
        path:last-child {
          fill: white;
        }
      }
      span {
        @media only screen and (max-width:768px){
          & {
            display: none;
          }
        }
      }
    }
  }
  .birja_block {
    margin: 0px 8px;
  }
  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav_link {
    font-weight: 400 !important;
    font-size: 23px !important;
    line-height: 27px !important;
    transition: all 0.3s ease-in-out;
    color: ${COLORS.white} !important;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      padding: 10px 0px;
    }
  }
  .active {
    color: ${COLORS.white} !important;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 555;
  }
  .logoBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -24px;
  }
  .menuIcon {
    width: 95px;
    height: 28px;
    cursor: pointer;
    display: none;
  }
  .logoImg {
    width: 100%;
  }
  .catalog-btn {
    font-size: 18px;
    font-weight: 500;
    background-color: ${COLORS.main};
    color: ${COLORS.white};
    outline: none;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: auto auto;
    padding-left: 25px;
    padding-right: 25px;
    max-width: 225px;
    width: 100%;
    height: 42px;
    .catalog-icon {
      margin-right: 10px;
    }
  }
  .searchBlock {
    max-width: 500px;
    width: 100%;
    height: 100%;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #f4f7fa;
    border-radius: 10px;
    padding: auto 0;
    padding-left: 25px;
    padding-right: 25px;
    cursor: pointer;
    input {
      background-color: transparent;
      width: 100%;
      height: 22px;
      color: ${COLORS.grey};
      font-weight: 500;
      font-size: 18px;
      border: none;
      outline: none;
    }
  }
  .select-city {
    .ant-select-selector {
      border: none !important;
      outline: none !important;
    }
    .ant-select-selection-search {
      outline: none !important;
    }
    .ant-select-arrow {
      color: ${COLORS.black} !important;
    }
  }
  .nav-userAccount {
    /* width: 280px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      cursor: pointer;
    }
    .respons-search {
      display: none;
    }
  }

  .respons-menu {
    background-color: ${COLORS.black};
    padding: 15px;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 5;
    transition: all 0.3s ease-in-out;
    .searchBlock {
      margin: 25px 0;
    }
  }

  @media screen and (max-width: 992px) {
    .birja_block{
      display: none;
    }
    .wrapper {
      .catalog-btn,
      .searchBlock,
      .select-city {
        display: none;
      }
    }
    .menuIcon,
    .nav-userAccount > .respons-search {
      display: block;
    }
  }
`;
