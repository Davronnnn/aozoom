import React, { useState } from 'react';
import { Button, Form, Input, notification } from 'antd';

import { StyledContainer } from '../../../styles/Container.style';
import { StyledSignIn } from './Auth.style';
import Axios from '../../../utils/axios';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../../../store/actios/authAcions';

function AdminSignIn() {
	const [userName, setUserName] = useState(null);
	const [password, setPassword] = useState(null);
	const dispatch = useDispatch();

	const userData = {
		login: userName,
		password: password,
	};

	const handleSubmite = async (e) => {
		e.preventDefault();
		try {
			const res = await Axios.post(`/accounts/login/`, {
				...userData,
			});
			const { data } = res;
			const { success } = data;
			if (success === true) {
				dispatch(signUpAction(data.data));
				localStorage.setItem('user_info', JSON.stringify(data.data));
				window.location.reload();
			}
		} catch (error) {
			notification['error']({
				message: 'Something went wrong',
				description: `${error.message} Email or  password is not valid`,
			});
		}
	};
	// const onChange = (e) => {
	//   setValue(e.target.value);
	// };
	return (
		<StyledSignIn>
			<StyledContainer>
				<div className='container'>
					<div className='wrapper'>
						<h2 className='auth_title'>Вход</h2>
						<div className='form_block'>
							<Form layout='vertical'>
								<Form.Item
									label='Логин'
									name='userName'
									rules={[
										{
											required: true,
											type: 'email',
											message:
												'Пожалуйста, введите свой адрес электронной почты!',
										},
									]}>
									<Input
										required
										onChange={(e) =>
											setUserName(e.target.value)
										}
										value={userName}
									/>
								</Form.Item>
								<Form.Item
									label='Пароль'
									name='password'
									rules={[
										{
											required: true,
											message:
												'Пожалуйста, введите ваш пароль!',
										},
									]}>
									<Input.Password
										required
										onChange={(e) =>
											setPassword(e.target.value)
										}
										value={password}
									/>
								</Form.Item>
								<div className='sbt_block'>
									<Button
										type='primary'
										onClick={handleSubmite}>
										Войти
									</Button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</StyledContainer>
		</StyledSignIn>
	);
}

export default AdminSignIn;
