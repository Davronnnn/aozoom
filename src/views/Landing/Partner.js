import React from "react";
import Main from "../../components/Main";
import PartnerBodyImage from "../../assets/img/partner-body-img.png";
import PartnerImage from "../../assets/img/partner-bg.png";
import { StyledLanding } from "../../styles/Landing.style";
import BodyInfo from "../../components/BodyInfo/BodyInfo";
import CardList from "../../components/CardList/CardList";
import Bar from "../../assets/img/bar-new.svg";
import Bar1 from "../../assets/img/chart.svg";
import Purchase from "../../assets/img/operator.svg";
import Purchase1 from "../../assets/img/safety.svg";
import Download from "../../assets/img/technic.svg";
import Download1 from "../../assets/img/convenient.svg";
import Product from "../../assets/img/product.svg";
import { Col, Row } from "antd";
import Text from "../../components/Text/Text";
import { StyledContainer } from "../../styles/Container.style";
import Service from "../../components/Servise/Service";
import { useTranslation } from "react-i18next";
const Partner = () => {
  const { t } = useTranslation();
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <StyledLanding img={PartnerImage}>
      <Main
        buttonText={t("p35")}
        textColor={"white"}
        leftSideText={t("p37")}
        leftSidePar={t("p38")}
        url={"/my-account"}
      />
      <BodyInfo
        img={PartnerBodyImage}
        title={t("p39")}
        subtitle={t("p40")}
        subtitleSecond={t("p61")}
        subtitleThird={t("p62")}
      />
      <StyledContainer>
        <div className="container">
          <div className="conveniences_block">
            <Row>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList img={Bar1} heading={t("p41")} text={t("p63")} />
              </Col>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList img={Purchase1} heading={t("p64")} text={t("p65")} />
              </Col>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList img={Download1} heading={t("p66")} text={t("p67")} />
              </Col>
            </Row>
          </div>

          <Text heading={t("p68")} text={t("p69")} />
          <Text heading={t("p70")} text={t("p71")} />
          <div className="conveniences_block">
            <Row>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList
                  img={Bar}
                  text={"Отображение всех товаров  в каталоге"}
                />
              </Col>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList
                  img={Purchase}
                  text={"Удаленный менеджер по обслуживанию"}
                />
              </Col>
              <Col
                style={style}
                sm={{
                  span: 24,
                  offset: 0,
                }}
                lg={{
                  span: 8,
                  offset: 0,
                }}
              >
                <CardList
                  img={Download}
                  text={"Бесплатная  техническая поддержка"}
                />
              </Col>
            </Row>
          </div>
        </div>
      </StyledContainer>
      <Service />
    </StyledLanding>
  );
};

export default Partner;
