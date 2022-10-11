import React from "react";
import Main from "../../components/Main";
import PurchaserBodyImg from "../../assets/img/purchaser-body-img.png";
import { StyledLanding } from "../../styles/Landing.style";
import BodyInfo from "../../components/BodyInfo/BodyInfo";
import CardList from "../../components/CardList/CardList";
import Bar from "../../assets/img/bar-new.svg";
import Purchase from "../../assets/img/operator.svg";
import Download from "../../assets/img/technic.svg";
import PurchaserImg from "../../assets/img/purchaser-bg.png";
import { Col, Row } from "antd";
import Text from "../../components/Text/Text";
import { StyledContainer } from "../../styles/Container.style";
import Service from "../../components/Servise/Service";
import { useTranslation } from "react-i18next";
const Purchaser = () => {
  let leftSideText =
    "";
    const {t} = useTranslation()
  let style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <StyledLanding img={PurchaserImg}>
      <Main
        leftSideText={t("p42")}
        buttonText={t("p34")}
        width={'60%'}
        url={"/products"}
        flexDirection={"column"}
        isFlexTrue={true}
        textColor={"white"}
      />
      <BodyInfo
        img={PurchaserBodyImg}
        title={t("p43")}
        subtitle={t("p44")}
        subtitleSecond={t("p45")}
        subtitleThird={t("p46")}
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
                <CardList
                  img={Bar}
                  text={t("p47")}
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
                  text={t("p48")}
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
                  text={t("p49")}
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

export default Purchaser;
