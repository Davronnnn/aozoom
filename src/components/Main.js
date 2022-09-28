import React from "react";
import { StyledContainer } from "../styles/Container.style";
import { Row, Col, Button } from "antd";
import Service from "./Servise/Service";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const navigate = useNavigate();
  const {
    img,
    textColor,
    buttonText,
    leftSideText,
    leftSidePar,
    flexDirection,
    aboutPageButtonText,
    isFlexTrue,
  } = props;
  
  const loginToAccount = () => {
    let user = JSON.parse(localStorage.getItem('user_info'))
    if(user?.token){
      if (user.admin.role == "Customer") {
        navigate("/my-account");
      }
    }else {
      navigate('/sign-in')
    }
  };
  const colStyle = {
    width: "100%",
  };
  return (
    <div className="entry-section">
      <StyledContainer>
        <div className="container">
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection,
            }}
          >
            <Col
              style={
                isFlexTrue
                  ? {
                      ...colStyle,
                      display: "flex",
                      flexDirection: "column",
                      // alignItems: "center",
                      // justifyContent: "center",
                    }
                  : colStyle
              }
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={
                isFlexTrue
                  ? {
                      span: 24,
                      offset: 0,
                    }
                  : {
                      span: 18,
                      offset: 0,
                    }
              }
            >
              <h1
                style={{
                  color: props.textColor,
                  width: props.width,
                  lineHeight: "1.4p",
                }}
                className="heading-title"
              >
                {leftSideText}
              </h1>
              <p
                style={{ color: props.textColor }}
                className="heading-paragraph"
              >
                {leftSidePar}
              </p>
              <div className="buttonContainer">
                <Button
                  type="primary"
                  size="large"
                  onClick={() => navigate(props.url)}
                  className="heading_btn"
                >
                  {buttonText}
                </Button>
                {aboutPageButtonText && (
                  <Button
                    type="primary"
                    ghost
                    size="large"
                    className="heading_btn"
                    onClick={loginToAccount}
                  >
                    {aboutPageButtonText}
                  </Button>
                )}
              </div>
            </Col>
            <Col
              style={colStyle}
              sm={{
                span: 24,
                offset: 0,
              }}
              lg={
                isFlexTrue
                  ? {
                      span: 24,
                      offset: 0,
                    }
                  : {
                      span: 12,
                      offset: 0,
                    }
              }
            >
              <div className="img-block">
                {/* {img && <img src={img} alt="oil" className="oilImg" />} */}
                <Button type="primary" size="large" className="headeing-btn">
                  {buttonText}
                </Button>
                {aboutPageButtonText && (
                  <Button
                    type="primary "
                    size="large"
                    ghost
                    className="headeing-btn"
                  >
                    {aboutPageButtonText}
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </StyledContainer>
    </div>
  );
};

export default Main;
