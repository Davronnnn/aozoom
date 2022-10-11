import React, { useState,useEffect } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/axios";
import {postUserInfo} from "../../../Redux/login/user"
import {useTranslation} from 'react-i18next'

function VerifyCode() {
  const {t} = useTranslation()
const [phoneNum, setPhoneNum] = useState()



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Axios.post('/accounts/send-phone-code/', {phone: phoneNum})
      console.log(res);
    } catch (error) {
      message.error(error)
    }
  }

  let role = JSON.parse(localStorage.getItem("user_info"))?.data?.user?.role

  return (
    <>
    <StyledSignIn>
      <StyledContainer>
        <div className="container">
          <div className="wrapper">
            <h2 className="auth_title">{t("Восстановить пароль")}</h2>
            <div className="form_block">
              <Form layout="vertical">
                <Form.Item label={t("Введите номер телефона")} name="phonNum"
                 rules={[
                {
                  required: true,
                  message: 'Iltimos nomeringizni kiriting!',
                },
                 ]}>
                  <Input
                    onChange={(e) => setPhoneNum(e.target.value)}
                    value={phoneNum}
                  />
                </Form.Item>
                <div className="sbt_block">
                  <Button type="primary" onClick={handleSubmit}>
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

export default VerifyCode;
