/* eslint-disable import/no-anonymous-default-export */
import styled from "styled-components";
import COLORS from "../../constants/colors";
import { STYLING_CONFIGS } from "../../constants/styling";

export const StyledApp = styled.main`
  /* ----- Main Layout --- */
  .custom-sidebar {
    background-color: ${COLORS.white};
    overflow: hidden;
    height: 100vh;
    position: fixed;
    left: 0;
    width: ${STYLING_CONFIGS.SIDEBAR_WIDTH}px;
    z-index: 1000;
  }
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  #main {
    background-color: ${COLORS.silverLight};
    padding-left: ${STYLING_CONFIGS.SIDEBAR_WIDTH}px;
  }
  .profile {
    text-align: center;
    padding: 30px 10px;
  }
  .sidebar-inner-wrapper {
    padding: 10px 16px;
  }
  .profile-image img {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #e7e9eb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-bottom: 7px;
  }
  #sidebar-menu {
    background-color: ${COLORS.white};
    border: none;
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    padding: 10px !important;
    color: ${COLORS.dark};
    border-radius: 5px;
    font-family: "Gilroy";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    &:hover {
      background-color: ${COLORS.main};
      color: ${COLORS.white};
      a{
        color: ${COLORS.white};
      }
    
      svg {
        stroke: ${COLORS.white};
        /* fill: ${COLORS.white}; */
        path,
        /* rect, */
        path:last-child {
          stroke: ${COLORS.white};
          /* fill: ${COLORS.white}; */
        }
      }
    }
  }
  .sidebar-logOut {
    display: flex;
    align-items: center;
    padding: 10px !important;
    color: ${COLORS.red};
    font-family: sans-serif;
    font-style: Lig;
    font-weight: 300;
    font-size: 18px;
  }
  .ant-menu-sub.ant-menu-inline {
    background-color: #eee;
  }
  .sidebar-item .ant-menu-item-icon,
  .ant-menu-submenu-title svg {
    width: 30px !important;
    min-width: 30px;
    height: 30px;
    min-height: 30px !important;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected {
    background-color: ${COLORS.main};
      color: ${COLORS.white} !important;
      svg {
        stroke: ${COLORS.white};
        /* fill: ${COLORS.white}; */
        path,
        /* rect, */
        path:last-child {
          stroke: ${COLORS.white};
          /* fill: ${COLORS.white}; */
        }
      }
      .active{
        color: ${COLORS.white};
      }
  }
  .submenu-item {
    padding-left: 10px !important;
    display: flex;
    align-items: center;
  }
  .submenu-item .ant-menu-item-icon,
  .ant-menu-item .ant-menu-item-icon {
    width: 24px !important;
    min-width: 24px;
    height: 24px;
    min-height: 24px !important;
  }
  .ant-menu-submenu-title {
    padding-left: 10px !important;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Roboto-medium";
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  #sidebar-menu .sidebar-item.ant-menu-item-selected::after {
    border-right: none;
  }
  .language-list {
    margin: auto 12px 20px;
    max-width: 160px;
    align-self: center;
    & > .ant-select-selector {
      background-color: transparent !important;
      border: none !important;
      box-shadow: none;
    }
    .ant-select-arrow {
      top: 50%;
      display: inline-block;
    }
    .ant-select-selection-item {
      line-height: 42px !important;
    }
    .ant-select-item.ant-select-item-option {
      height: 42px;
      line-height: 42px;
      padding: 0 10px;
      border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
      &:hover {
        background-color: #f6f6f8;
      }
    }
    .flag {
      width: 24px;
      height: 24px;
      margin-right: 7px;
      object-fit: cover;
      border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
      vertical-align: middle;
    }
  }
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: none !important;
  }
  .language-items {
    padding: 8px 12px;
    background: #ffffff;
    border: 1px solid #d6d8da;
    box-sizing: border-box;
    box-shadow: 0 6px 15px rgba(51, 51, 51, 0.08);
    border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
    .ant-select-item-option-selected {
      background-color: ${COLORS.darkGrey};
    }
    .ant-select-item-option {
      height: 42px;
      line-height: 42px;
      margin: 3px 0;
      padding: 0 10px;
      border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
      &:hover {
        background: #f6f6f8;
        border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
      }
    }
    .flag {
      width: 24px;
      height: 24px;
      margin-right: 7px;
      object-fit: cover;
      border-radius: ${STYLING_CONFIGS.BORDER_RADIUS}px;
      vertical-align: middle;
    }
  }
  #languages {
    .ant-select-arrow {
      right: 20px;
    }
  }
  /* ---- Collapsed screen ----- */
  .ant-layout-sider-collapsed + #main {
    background-color: #fff;
    padding-left: 80px;
  }
  .ant-layout-sider-collapsed .profile h4 {
    display: none;
  }
  .ant-layout-sider-collapsed #sidebar-menu {
    width: 100%;
  }
  .ant-layout-sider-collapsed .profile {
    padding: 30px 0;
  }
  .ant-layout-sider-collapsed .language-list {
    margin: auto 12px 20px;
  }
  .ant-layout-sider-collapsed .language-list .ant-select-arrow {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item {
    padding-right: 0 !important;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item span {
    display: none;
  }
  .ant-layout-sider-collapsed .ant-select-selection-item .flag {
    margin: 0;
  }
  .ant-layout-sider-collapsed .ant-menu-submenu-title > span {
    display: none;
  }
  @media only screen and (max-width: 990px) {
    #main {
      padding-left: 80px;
    }
  }
`;
