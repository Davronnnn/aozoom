import React, { useCallback, useState } from "react";
import { Col, Row, Button, Form, Input, message } from "antd";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";
import { StyledContainer } from "../../styles/Container.style";
import { StyledFooter } from "./Footer.style";
import Axios from "../../utils/axios";
import InstagramIcon from "../../assets/img/instagram.svg";
import FacebookIcon from "../../assets/img/facebook.svg";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;
const initialState = {
  fullName: "",
  phoneNumber: "",
  description: "",
};
function Footer() {
  const {t} = useTranslation()
  const [formValue, setFormValue] = useState({
    fullName: "",
    phoneNumber: "",
    description: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValue((state) => ({ ...state, [name]: value }));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name: formValue.fullName,
      phone: formValue.phoneNumber,
      text: formValue.description,
      type: "question",
    };
    try {
      const res = await Axios.post("/adminside/request_create/", formData);
      setFormValue(initialState)
      if (res.status == 201) {
        message.success("Отправлено");
        handleShowModal();
      }
    } catch (error) {
      message.error("Что-то пошло не так, попробуйте еще раз");
    }
  };

  const handleShowModal = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <StyledFooter>
      <StyledContainer>
        <div className="container">
          <Modal
            visible={isVisible}
            title={null}
            onOk={handleShowModal}
            onCancel={handleShowModal}
            footer={null}
          >
            <Form layout="vertical" onSubmit={handleSubmit}>
              <label htmlFor="fullName">{t("p90")}</label>
              <Input
                required
                onChange={handleInputChange}
                name="fullName"
                id="fullName"
                value={formValue.fullName}
              />
              <label htmlFor="phoneNumber">{t("p91")}</label>
              <Input
                required
                onChange={handleInputChange}
                name="phoneNumber"
                id="phoneNumber"
                minLength={7}
                value={formValue.phoneNumber}
              />
              <label htmlFor="description">{t("p92")}</label>
              <TextArea
                required
                onChange={handleInputChange}
                name="description"
                id="description"
                value={formValue.description}
                rows={6}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >

                <Button style={{marginTop:"10px"}} type="primary" htmlType="submite" onClick={handleSubmit}>
                  {t("p93")}
                </Button>
              </div>
            </Form>
          </Modal>
          <Row gutter={[30, 30]}>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 6,
              }}
            >
              <div className="navigation">
                <h4 className="footer_heading">{t("p19")}</h4>
                <Link to="/">{t("p25")}</Link>
                <Link to="/about">{t("p26")}</Link>
                <Link to="/partner"> {t("p27")}</Link>
                <Link to="/service"> {t("p28")}</Link>
                <Link to="/products"> {t("p29")}</Link>
              </div>
            </Col>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 12,
              }}
            >
              <div className="contact">
                <h4 className="footer_heading">{t("p20")}</h4>
                <a href="https://www.google.com/maps/place/41°19'55.0%22N+69°14'56.7%22E/@41.331939,69.2468823,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xce22268ab1beb8ec!8m2!3d41.331939!4d69.249071">
                  {t("p30")}
                </a>
                <a href="mailto:info@email.com">Эл. почта: info@gazoil.uz </a>
                <a href="tel:+998 77 777 73 13"> Телефон: +998 77 777 73 13</a>
              </div>
            </Col>
            <Col
              sm={{
                span: 24,
              }}
              lg={{
                span: 6,
              }}
            >
              <div className="socials_media">
                <div>
                  <h4 className="footer_social_heading">
                    {t("p21")}
                  </h4>
                  <div className="social_icons">
                    <div>
                      <a href="https://t.me/gazoiluz">
                        <FaTelegramPlane color="#364A7E" size="20" />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.instagram.com/gazoiluz/">
                        <FaInstagram color="#364A7E" size="20" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact_message">
                <div>
                  <h4 className="footer_social_heading">{t("p22")}</h4>
                  <button className="message_btn" onClick={handleShowModal}>
                    {t("p23")}
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
}

export default Footer;
