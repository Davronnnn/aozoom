import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { BsPlusLg } from 'react-icons/bs';
import axios from 'axios';
import { Row, Col, Input, Select, Checkbox, Button } from 'antd';
import { StyledAddProduct } from './Addproduct.style';
import Axios from '../../../utils/axios';
import { t } from 'i18next';
import colors from '../../../constants/colors';
const { TextArea } = Input;
const { Option } = Select;
function Addproduct() {
	const [productName, setProductName] = useState('');
	const [article, setArticle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [price, setPrice] = useState();
	const [litre, setLitre] = useState(0);
	const [statusProduct, setStatusProduct] = useState(true);
	const [quantity, setQuantity] = useState(0);
	const [delivered, setDelivered] = useState(false);
	const [productCategory, setProductCategory] = useState([]);
	const [uploadedImgs, setUploadedImgs] = useState([]);
	const [uplodedImgsId, setUplodedImgsId] = useState([]);
	const navigate = useNavigate();
	const imgRef1 = useRef();
	const imgRef2 = useRef();
	const imgRef3 = useRef();
	const imgRef4 = useRef();
	let adminInfo = JSON.parse(localStorage.getItem('user_info'))?.data;

	let header = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${adminInfo.token?.access}`,
	};

	const key = 'updatable';

	const openSuccesMessage = () => {
		message.loading({ content: 'Loading...', key });
		setTimeout(() => {
			message.success({ content: 'Succes', key, duration: 2 });
		}, 1000);
	};
	const openErrorMessage = () => {
		message.loading({ content: 'Loading...', key });
		setTimeout(() => {
			message.error({ content: 'Error', key, duration: 2 });
		}, 1000);
	};

	const handleDelivered = () => {
		setDelivered((prev) => !prev);
	};

	const uploadImg = async (inpFile) => {
		const formData = new FormData();
		formData.append('image', inpFile.current.files[0]);
		try {
			const res = await Axios.post(`/products/upload_image/`, formData);
			setUploadedImgs([...uploadedImgs, res.data]);
			setUplodedImgsId([...uplodedImgsId, { id: res?.data.id }]);
		} catch (error) {}
	};
	const handleFocus = (inp) => {
		inp.current.click();
	};
	const getCategories = async () => {
		try {
			const res = await Axios.get('products/categories/', {
				headers: header,
			});
			setProductCategory(res?.data?.results);
		} catch (error) {}
	};

	const handleSubmite = async (e) => {
		e.preventDefault();
		const productData = {
			title: productName,
			description: description,
			vendor_code: article,
			images: uplodedImgsId,
			categories: [
				{
					id: category,
				},
			],
			litre,
			delivery: delivered,
			price: price,
			in_stock: quantity,
			litre,
			delivery: delivered,
		};

		try {
			const resProduct = await Axios.post(
				`/products/`,
				{ ...productData },
				{ headers: header }
			);
			openSuccesMessage();
			navigate('/my-account');
		} catch (error) {
			openErrorMessage();
		}
	};
	useEffect(() => {
		getCategories();
	}, []);
	return (
		<StyledAddProduct>
			<form>
				<Row gutter={[20, 20]}>
					<Col sm={{ span: 24 }} lg={{ span: 16 }}>
						<div className='left_side'>
							<header>
								<h2 className='title'>{t('???????????????? ??????????')}</h2>
							</header>
							<div className='upload_pictures'>
								<h3>{t('????????????????????')}</h3>
								<div className='imgs_block'>
									<div
										className='img_upload'
										onClick={() => handleFocus(imgRef1)}>
										{uploadedImgs?.length > 0 ? (
											<img
												style={{
													width: '100%',
													height: '100%',
													'object-fit': 'cover',
												}}
												src={uploadedImgs[0]?.image}
												alt='productImg'
											/>
										) : (
											<>
												{' '}
												<BsPlusLg
													color={colors.main}
													size='50'
												/>
												<input
													required
													ref={imgRef1}
													onChange={() =>
														uploadImg(imgRef1)
													}
													type='file'
												/>
											</>
										)}
									</div>
									<div
										className='img_upload'
										onClick={() => handleFocus(imgRef2)}>
										{uploadedImgs?.length > 1 ? (
											<img
												style={{
													width: '100%',
													height: '100%',
													'object-fit': 'cover',
												}}
												src={uploadedImgs[1]?.image}
												alt='productImg'
											/>
										) : (
											<>
												{' '}
												<BsPlusLg
													color={colors.main}
													size='50'
												/>
												<input
													required
													ref={imgRef2}
													onChange={() =>
														uploadImg(imgRef2)
													}
													type='file'
												/>
											</>
										)}
									</div>
									<div
										className='img_upload'
										onClick={() => handleFocus(imgRef3)}>
										{uploadedImgs?.length > 2 ? (
											<img
												style={{
													width: '100%',
													height: '100%',
													'object-fit': 'cover',
												}}
												src={uploadedImgs[2]?.image}
												alt='productImg'
											/>
										) : (
											<>
												{' '}
												<BsPlusLg
													color={colors.main}
													size='50'
												/>
												<input
													required
													ref={imgRef3}
													onChange={() =>
														uploadImg(imgRef3)
													}
													type='file'
												/>
											</>
										)}
									</div>
									<div
										className='img_upload'
										onClick={() => handleFocus(imgRef4)}>
										{uploadedImgs?.length > 3 ? (
											<img
												style={{
													width: '100%',
													height: '100%',
													'object-fit': 'cover',
												}}
												src={uploadedImgs[3]?.image}
												alt='productImg'
											/>
										) : (
											<>
												{' '}
												<BsPlusLg
													color={colors.main}
													size='50'
												/>
												<input
													required
													ref={imgRef4}
													onChange={() =>
														uploadImg(imgRef4)
													}
													type='file'
												/>
											</>
										)}
									</div>
								</div>
							</div>
							<Row gutter={[20, 20]}>
								<Col span={16}>
									<label htmlFor='productName'>
										{t('????????????????')}
									</label>
									<Input
										required
										type='text'
										value={productName}
										onChange={(e) =>
											setProductName(e.target.value)
										}
										id='productName'
									/>
								</Col>
								<Col span={8}>
									<label htmlFor='article'>
										{t('??????????????')}
									</label>
									<Input
										required
										type='text'
										value={article}
										onChange={(e) =>
											setArticle(e.target.value)
										}
										id='article'
									/>
								</Col>
								<Col span={8}>
									<label htmlFor='litr'>{t('??????????')}</label>
									<Input
										required
										type='number'
										value={litre}
										onChange={(e) =>
											setLitre(e.target.value)
										}
										id='litr'
										placeholder='????????'
									/>
								</Col>
								<Col span={24}>
									<label htmlFor='description'>
										{t('????????????????')}
									</label>
									<TextArea
										rows={8}
										id='description'
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
									/>
								</Col>
								<Col span={24}>
									<div className='status_product'>
										<h2>{t('??????????????????')}</h2>
										<select
											className='select_category'
											value={category}
											onChange={(e) =>
												setCategory(e.target.value)
											}>
											<option>???????????????? ??????????????????</option>
											{productCategory?.map(
												(item, index) => (
													<option
														key={index}
														value={item?.id}>
														{item?.name}
													</option>
												)
											)}
										</select>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
					<Col sm={{ span: 24 }} lg={{ span: 8 }}>
						<div className='right_side'>
							<h2 className='title'>{t('????????')}</h2>
							<Row gutter={[5, 5]}>
								<Col span={18}>
									<Input
										required
										type='text'
										onChange={(e) =>
											setPrice(e.target.value)
										}
										value={price}
										placeholder='0.00'
									/>
								</Col>
								<Col span={6}>??????</Col>
							</Row>
							<div className='status_product'>
								<h2>{t('???????????? ????????????')}</h2>
								<Checkbox
									checked={statusProduct}
									onChange={() =>
										setStatusProduct(!statusProduct)
									}>
									{t('???????????????? ?? ????????????????')}
								</Checkbox>
							</div>
							<div className='status_product'>
								<h2>{t('?????????????? ???? ????????????')}</h2>
								<Row>
									<Col>{t('?? ??????????????')}</Col>
									<Col>
										<Input
											required
											value={quantity}
											onChange={(e) =>
												setQuantity(e.target.value)
											}
										/>
									</Col>
								</Row>
							</div>
							<div className='status_product'>
								<Checkbox
									checked={delivered}
									onChange={handleDelivered}
									name='delivered'>
									{t('????????????????')}
								</Checkbox>
							</div>
							<div className='sbm_btn'>
								<Button
									type='primary'
									onClick={handleSubmite}
									htmlFor='submit'>
									{t('??????????????????')}
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</form>
		</StyledAddProduct>
	);
}

export default Addproduct;
