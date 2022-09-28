import React, { useState, useCallback, useEffect } from "react";
import { Input, Row, Col, Popconfirm } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { StyledExchangeDetails } from "./Exchange.style";
import Axios from "../../../../utils/axios";
import axios from "axios";

function ExchangeDetail(props) {
  const [formValues, setFormValues] = useState({
    product: props?.product,
    price: props?.price,
    percentage: props?.percentage,
  });

  let adminInfo = JSON.parse(localStorage.getItem("user_info"));
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${adminInfo?.token?.access}`,
  };

  const handleInput = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((state) => ({ ...state, [name]: value }));
  }, []);

  const updateExchanges = async () => {
    try {
      const res = await Axios.patch(
        `products/product_prices/${props.id}`,
        {
          product: formValues.product,
          price: formValues.price,
          percentage: formValues.percentage,
        },
        { headers: header }
      );
    } catch (error) {
    }
  };

  useEffect(() => {
    updateExchanges();
  }, [props.submit]);
  return (
    <StyledExchangeDetails>
      <Row gutter={[10, 10]}>
        <Col sm={{ span: 24 }} lg={{ span: 3 }}>
          <h4>Блок-{props?.length}</h4>
        </Col>
        <Col sm={{ span: 24 }} lg={{ span: 11 }}>
          <div className="productName">
            <label htmlFor="product" className="unrespons_label">
              Название
            </label>
            <Input
              onChange={handleInput}
              required
              type="text"
              name="product"
              id="product"
              value={formValues?.product}
            />
            <label htmlFor="product" className="respons_label">
              Название
            </label>
          </div>
        </Col>
        <Col sm={{ span: 24 }} lg={{ span: 5 }}>
          <div className="productPrice">
            <Input
              onChange={handleInput}
              required
              type="text"
              name="price"
              id="price"
              value={formValues?.price}
            />
            <label htmlFor="price">UZS</label>
          </div>
        </Col>
        <Col sm={{ span: 24 }} lg={{ span: 5 }}>
          <div className="productPercentage">
            <Input
              onChange={handleInput}
              type="text"
              name="percentage"
              id="percentage"
              value={formValues?.percentage}
            />
            <label htmlFor="percentage">%</label>

            <Popconfirm
              title="Are you sure to delete this exchange?"
              onConfirm={props.delete}
              okText="Yes"
              cancelText="No"
            >
              <RiDeleteBinLine color="red" size="24" />
            </Popconfirm>
          </div>
        </Col>
      </Row>
    </StyledExchangeDetails>
  );
}

export default ExchangeDetail;
