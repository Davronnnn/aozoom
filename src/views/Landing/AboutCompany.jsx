import React from "react";
import Service from "../../components/Servise/Service";
import CompanyImg from "../../assets/img/company-bg.png";
import Text from "../../components/Text/Text";
import { AboutPageStyle } from "../../styles/AboutPageSyle";
import { StyledContainer } from "../../styles/Container.style";
import { StyledLanding } from "../../styles/Landing.style";
import Main from "../../components/Main";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { useSelector } from "react-redux";

const AboutCompany = () => {
  const {t} = useTranslation()
  let lang = useSelector(state=>state.language.languageData)


  return (
    <StyledLanding img={CompanyImg}>
      <Main
        leftSideText={t("p33")}
        buttonText={t("p34")}
        aboutPageButtonText={t("p35")}
        flexDirection={"column"}
        url={"/products"}
        isFlexTrue={true}
      />
      <StyledContainer>
        <div className="container">
          <div style={{ marginTop: "60px" }}>
            <h2>{t("p36")}</h2>
            <p className="text">
              {t("p72")}
              <br />
              {t("p73")}
              <br />
              {t("p74")}
              <br />
              {t("p75")}
              <br />
              {t("p76")}
              <br />
              {t("p77")}
              <br />
              {t("p78")}
              <br />
              {t("p79")}
              <br />
              {t("p80")}
              <br />
              {t("p81")}
              <br />
              {t("p82")}
              <br />
              {t("p83")}
              <br />
              {t("p84")}
              <br />
              {t("p85")}
            </p>
          </div>
          <AboutPageStyle>
            <Row>
              <Col  md={{span: 24}} lg={{span: 14}}>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("Юридическое название")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">PETROL AUTO AND INDRUSTRIAL</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("Юридический адрес")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">г. Ташкент, массив Себзор Ц17/18 дом 4, кв.137</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("Расчетный счет")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">20208000100933302001</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("Наименование банка")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">Капитал Банк</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("МФО")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">00974</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">{t("ИНН")}:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">305 784 896</h5>
                    </Col>
                  </Row>
              <Row
                    className="modal_row"
                    style={{ margin: "15px 0px" }}
                    gutter={[24, 0]}
                  >
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="title">ОКЭД:</h5>
                    </Col>
                    <Col xs={{ span: 24 }} md={{ span: 12 }}>
                      <h5 className="sub_title">46710</h5>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </AboutPageStyle>
        </div>
      </StyledContainer>
      <Service />
    </StyledLanding>
  );
};

export default AboutCompany;
