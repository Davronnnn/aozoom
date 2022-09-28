import { Button, Image } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { ProductDetailStyle } from "../ProductDetail/ProductDetailStyle";

function BasketDetail({ props }) {
  const [count, setCount] = useState(0);
//   setCount(props?.quantity);
  useEffect(() => {
    setCount(props?.quantity);
  }, []);
  return (
    <ProductDetailStyle>
      <div className="detail-heading">
        <div className="heading-images">
          <Image src={props?.images[0]?.image} />
          <div>
            {/* <img src={imgSrc} alt="" /> */}
            {/* <img src={imgSrc} alt="" /> */}
            {/* <img src={imgSrc} alt="" /> */}
          </div>
        </div>
        <div className="heading-info">
          <h3>{props?.title}</h3>
          <h3>{count}</h3>
          {/* <div>
          <span onClick={() => decrement(id)} className="counter">
            -
          </span>
          <span>{count} sht</span>
          <span onClick={() => count + 1} className="counter">
            {" "}
            +
          </span>
        </div> */}
          <Button type="primary" onClick={props.handleDelete}>
            Удалить
          </Button>
        </div>
      </div>
    </ProductDetailStyle>
  );
}

export default BasketDetail;
