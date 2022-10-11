import React, { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { Button } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
// import Landing from './Landing';
import Footer from '../../components/Footer/Footer';
import { ROUTES } from '../../routes/index';
import Axios from '../../utils/axios';
import { StyledMainLanding } from './MainLanding.style';
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
				<svg
					width='59'
					height='62'
					viewBox='0 0 59 62'
					fill='#f47222'
					xmlns='http://www.w3.org/2000/svg'>
					<rect width='59' height='62' rx='10' fill='#f47222' />
					<path
						d='M45.9463 21.7002C45.6277 21.1433 45.1715 20.6793 44.6221 20.3533C44.0728 20.0273 43.4491 19.8505 42.8119 19.8402H19.2119L18.1425 15.6366C18.0345 15.2308 17.7934 14.8739 17.4586 14.6239C17.1238 14.374 16.715 14.2458 16.2988 14.2602H12.6113C12.1223 14.2602 11.6533 14.4561 11.3075 14.805C10.9618 15.1538 10.7675 15.6269 10.7675 16.1202C10.7675 16.6135 10.9618 17.0866 11.3075 17.4354C11.6533 17.7842 12.1223 17.9802 12.6113 17.9802H14.8975L19.9863 37.0638C20.0943 37.4696 20.3353 37.8265 20.6701 38.0764C21.0049 38.3264 21.4138 38.4546 21.83 38.4402H38.4237C38.7642 38.4391 39.0978 38.343 39.3874 38.1624C39.6771 37.9819 39.9115 37.7239 40.0647 37.4172L46.1122 25.2156C46.3743 24.6613 46.4963 24.0502 46.4674 23.4368C46.4384 22.8234 46.2594 22.2268 45.9463 21.7002ZM37.2806 34.7202H23.2313L20.2259 23.5602H42.8119L37.2806 34.7202Z'
						fill='white'
					/>
					<path
						d='M20.9081 47.74C22.4355 47.74 23.6738 46.4908 23.6738 44.95C23.6738 43.4091 22.4355 42.16 20.9081 42.16C19.3807 42.16 18.1425 43.4091 18.1425 44.95C18.1425 46.4908 19.3807 47.74 20.9081 47.74Z'
						fill='white'
					/>
					<path
						d='M39.3456 47.74C40.873 47.74 42.1113 46.4908 42.1113 44.95C42.1113 43.4091 40.873 42.16 39.3456 42.16C37.8182 42.16 36.58 43.4091 36.58 44.95C36.58 46.4908 37.8182 47.74 39.3456 47.74Z'
						fill='white'
					/>
				</svg>
			</div>
			<Footer />
		</StyledMainLanding>
	);
}

export default MainLanding;
