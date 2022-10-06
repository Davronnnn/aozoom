import { Row, Spin } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from '../../utils/axios';

const ProductDetail = () => {
	const { productId } = useParams();
	const [loading, setLoading] = useState(false);
	const [product, setProduct] = useState(false);

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

	useEffect(() => {
		getProducts();
	}, [getProducts]);

	return (
		<div className='product-container'>
			<Row>
				{loading ? (
					<Spin />
				) : (
					<div>{product.title}</div>
					// results.map((item, index) => {
					// 	return (
					// 		<Col
					// 			sm={{
					// 				span: 24,
					// 			}}
					// 			md={{
					// 				span: 12,
					// 			}}
					// 			lg={{
					// 				span: 8,
					// 			}}
					// 			key={index}>
					// 			<Link to={`/products/${item.id}`}>
					// 				<ProductCard
					// 					margin='10px'
					// 					key={index}
					// 					data={item}
					// 				/>
					// 			</Link>
					// 		</Col>
					// 	);
					// })
				)}
			</Row>
		</div>
	);
};

export default ProductDetail;
