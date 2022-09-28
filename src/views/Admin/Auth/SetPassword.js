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

function SetPassword() {
  let navigate  = useNavigate();
  const { t } = useTranslation();
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  let userInfo = localStorage.getItem("restToken");
  let header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userInfo}`,
  };
  const sendCode = async (e) => {
    e.preventDefault();
    if (newPassword == confirmPassword) {
        
        const formData = new FormData();
        formData.append("new_password", newPassword);
    formData.append("confirm_password", confirmPassword);
    try {
      const res = await Axios.post("/accounts/reset-password/", formData, {headers: header});
      message.success("Ваш пароль был успешно изменен")
      localStorage.removeItem("restToken")
      navigate('/sign-in')
    } catch (error) {
        message.error(error);
    }
} else {
    message.error("Пароли не совпадают")
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
                    label={t("Введите новый пароль")}
                    name="phonNum"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos yangi parolni kiriting!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </Form.Item>

                  <Form.Item
                    label={t("Подтвердите новый пароль")}
                    name="code"
                    rules={[
                      {
                        required: true,
                        message: "Iltimos parolni qayta kiriting!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </Form.Item>

                  <div className="sbt_block">
                    <Button
                      type="primary"
                      onClick={sendCode}
                    >
                      {t("Сохранить")}
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

export default SetPassword;
