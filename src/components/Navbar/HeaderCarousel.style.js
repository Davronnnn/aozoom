import styled from "styled-components";
import COLORS from "../../constants/colors";

export const StyledHeaderCarousel = styled.div`
  .carousel_outer {
    height: 100px;
    width: 98vw;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 10px;
    .carousel_inner {
      display: block;
      width: 200%;
      position: absolute;
      animation: marquee 30s linear infinite;
      span {
        float: left;
        display: flex;
        align-items: stretch;
        width: 50%;
      }
      &:hover {
        animation-play-state: paused;
      }
    }
  }

  .price_block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      text-align: end;
    }
  }
 
  @keyframes marquee {
    0% {
      left: 100%;
    }
    100% {
      left: -100%;
    }
  }

  

  @media only screen and (max-width: 992px) {
    display: none;
  }
`;

export const StyledCard = styled.div`
.card {
    width: 160px;
    border-left: 0.5px solid ${COLORS.white};
    border-right: 0.5px solid ${COLORS.white};
    background-color: ${COLORS.main};
    padding: 7px;
    .text_block {
      /* width: 405px; */
      height: 20px;
      overflow: hidden;
      /* background-color: blue; */
      white-space: nowrap;
      position: relative;
      .text {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${COLORS.white};
        display: inline-block;
        /* position: absolute; */
        animation: slide 5s linear infinite;
      }
      .text_2 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${COLORS.white};
        display: inline-block;
      }
    }
    .price {
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: ${COLORS.white};
    }
    .increasing {
      text-align: start;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: ${COLORS.lightGreen};
    }
    .decreasing {
      text-align: start;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: ${COLORS.lightRed};
    }
  }

  @keyframes slide {
    0% {
      transform: translate(145px);
    }
    100% {
      transform: translate(-100%);

    }
}
`
