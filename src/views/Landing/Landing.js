import React from "react";
import { Row, Col, Button } from "antd";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { StyledLanding } from "../../styles/Landing.style";
import { StyledContainer } from "../../styles/Container.style";
import OilImg from "../../assets/img/home-bg.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import CategoryOil from "../../assets/img/category-oil.svg";
import Tyre from "../../assets/img/tyre.svg";
import Antfreez from "../../assets/img/antfreez.svg";
import Chimical from "../../assets/img/chimical.svg";
import Card from "../../components/TestimonialCard/Card";
import Products from "../../components/NewProducts/Products";
import Discount from "../../components/DiscountSection/Discount";
import Service from "../../components/Servise/Service";
import Main from "../../components/Main";
import useFetchHook from "../../customhooks/useFetchHook";
import News from "../../components/News/News";
import { useTranslation } from "react-i18next";

function Landing() {
  const { t } = useTranslation();
  return (
    <StyledLanding img={OilImg}>
      <Main
        buttonText={t("p10")}
        leftSideText={t("p8")}
        leftSidePar={t("p9")}
        flexDirection={"row"}
        url={"/about"}
      />
      <div className="category-section">
        <Row>
          <Col xs={{span: 0}} lg={{ span: 24 }}>
            <StyledContainer>
              <div className="container">
                <News />
                <div className="news_link">
                  <Link to="/news">
                    <Button type="primary" size="large">
                      {t("p31")}
                    </Button>
                  </Link>
                </div>
              </div>
            </StyledContainer>
          </Col>
        </Row>
      </div>
      <Products headTitle={t("p12")} />
      <Discount />
      <Service />
    </StyledLanding>
  );
}

export default Landing;
