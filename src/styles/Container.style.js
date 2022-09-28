import styled from "styled-components";

export const StyledContainer = styled.div`
  .container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
  }
  .aboutText {
    font-size: 20px;
    line-height: 26px;
  }
  .text {
    font-weight: 600;
    font-size: 18px;
    word-spacing: 3px;
    line-height: 25px;
  }
  @media (min-width: 476px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 768px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 992px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  @media (min-width: 476px) {
    .container {
      width: 100%;
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 720px;
      max-width: 100%;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 960px;
      max-width: 100%;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1140px;
      max-width: 100%;
    }
  }
  @media (min-width: 1400px) {
    .container {
      width: 1340px;
      max-width: 100%;
    }
  }
`;