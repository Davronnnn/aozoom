import React, { useState,useEffect } from "react";
import { Button, Form, Input, Radio, message } from "antd";
import {useSelector,useDispatch} from "react-redux"
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import { StyledContainer } from "../../../styles/Container.style";
import { StyledSignIn } from "./Auth.style";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../../../utils/axios";
import { signUpAction } from "../../../store/actios/authAcions";
import {postUserInfo} from "../../../Redux/login/user"
import Home from "../containers/Home/Home";
import {Navigate} from "react-router-dom"
import { useAlert } from 'react-alert'
import {useTranslation} from 'react-i18next'

function SignIn() {
  const {t} = useTranslation()
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);


  const alert = useAlert()
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const navigate = useNavigate();



  const userData = {
    login: userName,
    password: password,
  };
  const urlLink =
    value == "customer"
      ? "customer-login/"
      : value == "partner"
      ? "partner-login/"
      : "";

  const handleSubmit = async (e) => {
    if (urlLink == "") {
      message.warning("choose your role")
    }
    e.preventDefault();
    let data = {userData,url:urlLink}
    try {
      const originalPromiseResult = await dispatch(postUserInfo(data)).unwrap()
      message.success("Successfully completed")
      navigate('/my-account')
    } catch (error) {
      message.error(error)
    }
  }

  const onChange = (e) => {
    setValue(e.target.value);
  };

  let role = JSON.parse(localStorage.getItem("user_info"))?.data?.user?.role

  return (
    <>
    {
          role ? <Navigate exact = {true}  to = "/my-account"/> : null
    }


    <StyledSignIn>
      <StyledContainer>
        <div className="container">
          <div className="wrapper">
            <h2 className="auth_title">{t("Вход")}</h2>
            <div className="form_block">
              <Radio.Group onChange={onChange} value={value}>
                {/* <Radio value={"admin"}>Администратор</Radio> */}
                <Radio value={"customer"}>{t("Покупатель")}</Radio>
                <Radio value={"partner"}>{t("Поставщик")}</Radio>
              </Radio.Group>
              <Form layout="vertical">
                <Form.Item label="Email"  name="email"
                rules={[
                 {
                  type: 'email',
                  message: 'emailingizni togri kiriting!',
                },
                {
                  required: true,
                   message: 'emailingizni kiriting!',
                 },
                 ]}>
                  <Input
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </Form.Item>
                <Form.Item label={t("Пароль")} name="password"
                 rules={[
                {
                  required: true,
                  message: 'Iltimos parolingizni kiriting!',
                },
                 ]}>
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </Form.Item>
                <div className="sbt_block">
                  <Button type="primary" onClick={handleSubmit}>
                    {t("Войти")}
                  </Button>
                  <Link to="/sign-up">
                    <Button type="link">{t("Зарегистрироваться")}</Button>
                  </Link>
                </div>
               <Link to="/rest-password"><Button type="link" danger>Забыли пароль?</Button></Link>
              </Form>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledSignIn>
    </>
  );
}

export default SignIn;
