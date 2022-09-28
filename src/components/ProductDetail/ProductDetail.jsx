import { Button, Image, message, Modal } from "antd";
import React from "react";
import { ProductDetailStyle } from "./ProductDetailStyle";
import { useDispatch } from "react-redux";
import { addToCard } from "../../store/actios/publicActions";
import styled from "styled-components";
import Axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function ProductDetail(props) {
  const dispatch = useDispatch();
  const { isVisible, handleCancel } = props;
  const { title, images, price ,description,litre,id} = props.data;
  let userInfo = JSON.parse(localStorage.getItem("user_info"))?.data?.token?.access;
  const navigate = useNavigate()
  const addCard = async(e) => {
    e.stopPropagation();
    if (userInfo) {
        try {
          const res = await Axios.post("/cart/", {
            product: id,
            // quantity: state,
          });
        } catch (error) {}
        message.success("Добавлено в корзину", 1);
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <Modal footer={null} visible={isVisible} onCancel={handleCancel} width={1000}>
      <ProductDetailStyle color={"#364A7E"}>
        <div className="detail-heading">
          <div className="heading-images">
            <Image src={images[0]?.image} />
            <div className="imgs_block">
              {images?.map((item,index) => {
                return <img key={index} src={item?.image} alt="product" />;
              })}
            </div>
          </div>
          <div className="heading-info">
            <h3>{title}</h3>
            <h4>Цена: {price} UZS</h4>
            <h2>Объем: {litre}л</h2>
            <Button type="primary" onClick={(e) => addCard(e)}>
              В корзину
            </Button>
          </div>
        </div>
        <div className="detail-body">
          <p>{title}</p>
          <p>
              {description}
          </p>
        </div>
      </ProductDetailStyle>
    </Modal>
  );
}



