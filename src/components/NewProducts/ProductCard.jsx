import React, { useState } from 'react';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { StyledProductCard } from './ProductCardStyle';
import ProductDetail from '../ProductDetail/ProductDetail';
import { addToCard } from '../../store/actios/publicActions';
import { useNavigate } from 'react-router-dom';
import Axios from '../../utils/axios';
import { t } from 'i18next';
import { Link } from 'react-router-dom';
const ProductCard = ({ data, margin }) => {
	const { images = [], title = '', price = '' } = data;
	const navigate = useNavigate();
	const [state, setState] = useState(1);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const dispatch = useDispatch();
	let userInfo = JSON.parse(localStorage.getItem('user_info'))?.data?.token
		?.access;

	const quickIcon = (
		<svg
			className='quick-img'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 576 512'
			width={30}
			height={30}
			fill={'#f4732180'}>
			<path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z' />
		</svg>
	);

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
			<StyledProductCard margin={margin}>
				<div className='card-header'>
					<div className='card-quick' onClick={showModal}>
						{quickIcon}
					</div>
					<Link to={`/products/${data.id}`}>
						<img src={images[0]?.image} alt='oilImg' />
					</Link>
				</div>

				<div className='card-body'>
					<Link to={`/products/${data.id}`}>
						<h3>{title}</h3>
						<div>
							<h2>{price} UZS</h2>
						</div>
					</Link>
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
