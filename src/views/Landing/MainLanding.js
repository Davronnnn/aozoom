import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import Landing from './Landing';
import Footer from '../../components/Footer/Footer';
import { ROUTES } from '../../routes/index';
import Axios from '../../utils/axios';
import Korzinka from '../../assets/img/korzinka.svg';
import { StyledMainLanding } from './MainLanding.style';
import { StyledContainer } from '../../styles/Container.style';
import { SearchContext } from './SearchContext';
import { SelectContext } from '../../components/Navbar/SelectContext';

function MainLanding() {
	const [cartList, setCartList] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [value, setValue] = useState('');
	const [select, setSelect] = useState('');
	const getCarts = async () => {
		try {
			const res = await Axios.get('/cart');
			setCartList(res?.data?.results);
		} catch (error) {}
	};

	const removeItemFromBasket = async (id) => {
		try {
			const res = await Axios.delete(`/cart/cartitem/${id}`);
			if (res.status == 200) {
				getCarts();
			}
		} catch (error) {}
	};

	const openModal = async () => {
		getCarts();
		setShowModal(true);
	};
	const handleCancel = () => {
		setShowModal(!showModal);
	};

	return (
		<StyledMainLanding>
			<SearchContext.Provider value={{ value, setValue }}>
				<SelectContext.Provider value={{ select, setSelect }}>
					<Navbar
						isVisible={showModal}
						cartList={cartList}
						removeItemFromBasket={removeItemFromBasket}
						handleCancel={handleCancel}
						openModal={openModal}
					/>
					<Routes>
						{ROUTES?.map((item) => (
							<Route
								key={item}
								path={item?.path}
								element={item?.component}
							/>
						))}
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</SelectContext.Provider>
			</SearchContext.Provider>
			<div className='fixed_korzinka' onClick={openModal}>
				<img src={Korzinka} alt='Korzinka' />
			</div>
			<Footer />
		</StyledMainLanding>
	);
}

export default MainLanding;
