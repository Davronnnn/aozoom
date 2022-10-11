import { Button, Image, message, Row, Space, Spin, Typography } from 'antd';

import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetailPageStyle } from './ProducDetailPageStyle';
import Axios from '../../utils/axios';

const ProductDetail = () => {
	const { productId } = useParams();
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState(false);
	const navigate = useNavigate();
	const userInfo = JSON.parse(localStorage.getItem('user_info'))?.data?.token
		?.access;
	const getProducts = useCallback(async () => {
		setLoading(true);
		try {
			const res = await Axios.get(`/products/product/${productId}`);
			setProduct(res?.data);
			setLoading(false);
			console.log(res.data);
		} catch (error) {
			setLoading(false);
		}
	}, [productId]);

	const addCard = async (e) => {
		e.stopPropagation();
		if (userInfo) {
			try {
				const res = await Axios.post('/cart/', {
					product: productId,
					// quantity: state,
				});
			} catch (error) {}
			message.success('Добавлено в корзину', 1);
		} else {
			navigate('/sign-in');
		}
	};
	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<div className='product-container'>
			<Row>
				{loading ? (
					<Space
						direction='horizontal'
						style={{
							width: '100%',
							minHeight: '50vh',
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Spin />
					</Space>
				) : (
					<ProductDetailPageStyle color={'#F47321'}>
						<div className='detail-heading'>
							<div className='heading-images'>
								<Image
									src={
										product?.cover_image
											? 'https://backend.aozoom.uz' +
											  product?.cover_image
											: ''
									}
								/>
								<div className='imgs_block'>
									{product.images?.map((item, index) => {
										return (
											<img
												key={index}
												src={
													'https://backend.aozoom.uz' +
													item?.image
												}
												alt='product'
											/>
										);
									})}
								</div>
							</div>
							<div className='heading-info'>
								<h3>{product.title}</h3>
								<h4>Цена: {product.price} UZS</h4>
								<Button
									type='primary'
									onClick={(e) => addCard(e)}>
									В корзину
								</Button>
							</div>
						</div>
						<div className='detail-body'>
							<h3 className='detail-title'>{product.title}</h3>
							<p>{product.description}</p>
						</div>
					</ProductDetailPageStyle>
				)}
			</Row>
		</div>
	);
};

export default ProductDetail;
