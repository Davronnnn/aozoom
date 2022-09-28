import React, { useState } from "react";
import { Row, Col } from "antd";
import { StyledContainer } from "../../styles/Container.style";
import PageHeader from "../PageHeader/PageHeader";
import ServiceImg1 from "../../assets/img/service-car.svg";
import ServiceImg2 from "../../assets/img/service-box.svg";
import ServiceImg3 from "../../assets/img/service-chart.svg";
import ServiceImg4 from "../../assets/img/service-bag.svg";
import ServiceCard from "./ServiceCard";
import { useTranslation } from "react-i18next";

function Service() {
  const {t} = useTranslation()
  const [data, setData] = useState([
    {
      title: t("p15"),
      imgUrl: ServiceImg1,
    },
    {
      title: t("p16"),
      imgUrl: ServiceImg2,
    },
    {
      title: t("p17"),
      imgUrl: ServiceImg3,
    },
    {
      title: t("p18"),
      imgUrl: ServiceImg4,
    },
  ]);
  return (
    <div>
      <StyledContainer>
        <div className="container">
          <PageHeader title={t("p14")} />
          <Row gutter={[15, 15]} style={{ alignItems: "stretch" }}>
            {data?.map((item, index) => (
              <Col
                xs={{
                  span: 24,
                }}
                sm={{
                  span: 12,
                }}
                md={{
                  span: 12,
                }}
                lg={{
                  span: 6,
                }}
                key={index}
              >
                <ServiceCard imgUrl={item.imgUrl} serviceTitle={item.title} />
              </Col>
            ))}
          </Row>
        </div>
      </StyledContainer>
    </div>
  );
}

export default Service;
