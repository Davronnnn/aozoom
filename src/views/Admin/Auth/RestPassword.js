import React, { useState, useEffect } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/axios";
import { postUserInfo } from "../../../Redux/login/user";
import { useTranslation } from "react-i18next";
import axios from "axios";

function ResetPassword() {
  let navigate  = useNavigate();
  const { t } = useTranslation();
  const [phoneNum, setPhoneNum] = useState();
  const [code, setCode] = useState();
  const [hasCode, setHasCode] = useState(false);

  const sendPhone = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post("/accounts/send-phone-code/", {
        phone: phoneNum,
      });
      console.log(res);
      setHasCode(true);
      message.success(`Send code to ${phoneNum}`);
    } catch (error) {
      message.error(error);
    }
  };


  const sendCode = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phone_number", phoneNum);
    formData.append("sent_code", code);
    try {
      const res = await Axios.post(
        "/accounts/verify-code/",
        formData
      );
      message.success("Код совпал");
      localStorage.setItem('restToken', res?.data?.token?.access)
      navigate('/set-password');
    } catch (error) {
      message.error("Пользователь этого номера телефона не идентифицирован");
    }
  };

  return (
    <>
      <StyledSignIn>
        <StyledContainer>
          <div className="container">
            <div className="wrapper">
              <h2 className="auth_title">{t("Восстановить пароль")}</h2>
              <div className="form_block">
                <Form layout="vertical">
                  <Form.Item
                    label={t("Введите номер телефона")}
                    name="phonNum"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos nomeringizni kiriting!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => setPhoneNum(e.target.value)}
                      value={phoneNum}
                    />
                  </Form.Item>
                  {hasCode ? (
                    <Form.Item
                      label={t("Введите код")}
                      name="code"
                      rules={[
                        {
                          required: true,
                          message: "Iltimos kodni kiriting!",
                        },
                      ]}
                    >
                      <Input
                        onChange={(e) => setCode(e.target.value)}
                        value={code}
                      />
                    </Form.Item>
                  ) : null}
                  <div className="sbt_block">
                    <Button
                      type="primary"
                      onClick={hasCode ? sendCode : sendPhone}
                    >
                      {t("Получить код")}
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </StyledContainer>
      </StyledSignIn>
    </>
  );
}

export default ResetPassword;
