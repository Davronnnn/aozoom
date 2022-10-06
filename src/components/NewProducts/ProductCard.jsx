import React, { useState } from 'react';
import { Col, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { StyledProductCard } from './ProductCardStyle';
import ProductDetail from '../ProductDetail/ProductDetail';
import { addToCard } from '../../store/actios/publicActions';
import { useNavigate } from 'react-router-dom';
import Axios from '../../utils/axios';
import { t } from 'i18next';

const ProductCard = ({ data, margin }) => {
	const { images = [], title = '', price = '' } = data;
	const navigate = useNavigate();
	const [state, setState] = useState(0);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const dispatch = useDispatch();
	let userInfo = JSON.parse(localStorage.getItem('user_info'))?.data?.token
		?.access;
	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleCancel = () => {
		setIsModalVisible(!isModalVisible);
	};
	const addCard = async (e) => {
		e.stopPropagation();
		if (userInfo) {
			if (state > 0) {
				try {
					const res = await Axios.post('/cart/', {
						product: data.id,
						quantity: state,
					});
				} catch (error) {}
				dispatch(addToCard({ ...data, count: state }));
				message.success('Добавлено в корзину', 1);
			} else {
				message.warning('add count');
			}
		} else {
			navigate('/sign-in');
		}
	};

	const increment = (e) => {
		e.stopPropagation();
		setState((prev) => prev + 1);
	};

	const decrement = (e) => {
		e.stopPropagation();
		if (state > 0) {
			setState((prev) => prev - 1);
		}
	};
	return (
		<>
			<ProductDetail
				isVisible={isModalVisible}
				handleCancel={handleCancel}
				data={data}
			/>
			<StyledProductCard margin={margin} onClick={showModal}>
				<div className='card-header'>
					<img src={images[0]?.image} alt='oilImg' />
				</div>
				<div className='card-body'>
					<h3>{title}</h3>
					<div>
						<h2>{price} UZS</h2>
					</div>
				</div>
				<div className='card-footer'>
					<div>
						<span onClick={decrement} className='counter'>
							-
						</span>
						<span>{state} шт</span>
						<span onClick={increment} className='counter'>
							+
						</span>
					</div>
					<Button type='primary' onClick={(e) => addCard(e)}>
						{t('p32')}
					</Button>
				</div>
			</StyledProductCard>
		</>
	);
};

export default ProductCard;
