import React, { useEffect, useState } from "react";
import { StyledCard, StyledHeaderCarousel } from "./HeaderCarousel.style";
import Down from "../../assets/img/Arrow-down.svg";
import Up from "../../assets/img/Arrow-up.svg";
import Axios from "../../utils/axios";

function HeaderCarousel() {
  const [data, setData] = useState([]);

  const getPrices = async () => {
    try {
      const res = await Axios.get("/products/product_prices/");
      setData(res?.data);
    } catch (error) {}
  };

  useEffect(() => {
    getPrices();
  }, []);
  return (
    <StyledHeaderCarousel>
      <div className="carousel_outer">
        <div className="carousel_inner">
          <span>
            {data.map((item, index) => (
              <StyledCard length={item.product.length}>
                <div className="card" key={index}>
                  <div className="text_block">
                    {item?.product.length > 15 ? (
                      <div className="text">{item?.product}</div>
                    ) : (
                      <div className="text_2">{item?.product}</div>
                    )}
                  </div>
                  <div className="price_block">
                    <div>
                      <p className="price">{item?.price} UZS</p>
                      {item?.percentage < 0 ? (
                        <p className="decreasing">{item?.percentage}%</p>
                      ) : (
                        <p className="increasing">+{item?.percentage}%</p>
                      )}
                    </div>
                    {item?.percentage < 0 ? (
                      <img src={Down} alt="decreasing" />
                    ) : (
                      <img src={Up} alt="increasing" />
                    )}
                  </div>
                </div>
              </StyledCard>
            ))}
          </span>
        </div>
      </div>
    </StyledHeaderCarousel>
  );
}

export default HeaderCarousel;
