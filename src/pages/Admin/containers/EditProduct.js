import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Row, Col, Input, message, Select, Checkbox } from 'antd';
import Axios from '../../../utils/axios';
import { EditProStyle } from './EditProduct.style';
import { BsPlusLg } from 'react-icons/bs';
import colors from '../../../constants/colors';

const { TextArea } = Input;

function EditProduct() {
	const baseUrl = 'https://backend.aozoom.uz/swagger/';
	const navigate = useNavigate();
	const [data, setData] = useState({});
	const { productId } = useParams();
	const [category, setCategory] = useState('');
	const [statusProduct, setStatusProduct] = useState(true);
	const [delivered, setDelivered] = useState(false);
	const [formValues, setFormValues] = useState({
		title: '',
		vendor_code: '',
		price: '',
		in_stock: '',
		description: '',
		litre: 0,
	});
	const [productCategory, setProductCategory] = useState([]);
	const [uploadedImgs, setUploadedImgs] = useState([]);
	const [uplodedImgsId, setUplodedImgsId] = useState([]);
	const imgRef1 = useRef();
	const imgRef2 = useRef();
	const imgRef3 = useRef();
	const imgRef4 = useRef();

	let adminInfo = JSON.parse(localStorage.getItem('user_info'));

	let header = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${adminInfo.token?.access}`,
	};
	useEffect(() => {
		const ids = uploadedImgs.map((item) => ({ id: item.id }));
		setUplodedImgsId(ids);
	}, [uploadedImgs.length]);

	useEffect(() => {
		getProduct();
		getCategories();
		setFormValues({
			title: data?.title,
			vendor_code: data?.vendor_code,
			price: data?.price,
			in_stock: data?.in_stock,
			description: data?.description,
			litre: data?.litre,
			delivered: data?.delivery,
		});
	}, []);

	const handleDelivered = () => {
		setDelivered((prev) => !prev);
	};
	const handleSubmite = async (e) => {
		e.preventDefault();
		try {
			const res = await Axios.patch(
				`/adminside/product/${data.id}`,
				{
					images: uplodedImgsId,
					categories: [{ id: category }],
					...formValues,
					delivery: delivered,
				},
				{ headers: header }
			);
			if (res?.status == 200) {
				navigate('/purchases');
			}
		} catch (error) {}
	};
	const deleteImg = (id) => {
		let filteredImgs = uploadedImgs.filter((item) => item.id !== id);
		setUploadedImgs(filteredImgs);
	};

	const uploadImg = async (inpFile) => {
		const formData = new FormData();
		formData.append('image', inpFile.current.files[0]);
		try {
			const res = await Axios.post(`/products/upload_image/`, formData, {
				headers: header,
			});
			setUploadedImgs([...uploadedImgs, res.data]);
			setUplodedImgsId([...uplodedImgsId, { id: res?.data.id }]);
		} catch (error) {}
	};

	const handleFocus = (inp) => {
		inp.current.click();
	};

	const getProduct = async () => {
		try {
			const res = await Axios.get(`/products/product/${productId}`, {
				headers: header,
			});
			setData(res?.data);
			setFormValues({
				title: res?.data?.title,
				vendor_code: res?.data?.vendor_code,
				price: res?.data?.price,
				in_stock: res?.data?.in_stock,
				description: res?.data?.description,
				litre: res?.data?.litre,
			});
			setDelivered(res?.data?.delivery);
			setUploadedImgs(res?.data?.images);
			setCategory(res?.data?.categories?.map((item) => item.id));
		} catch (error) {}
	};
	const getCategories = async () => {
		try {
			const res = await Axios.get('products/categories/', {
				headers: header,
			});
			setProductCategory(res?.data?.results);
		} catch (error) {}
	};

	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormValues((state) => ({ ...state, [name]: value }));
	}, []);

	return (
		<EditProStyle>
			<form>
				<Row gutter={[20, 20]}>
					<Col sm={{ span: 24 }} lg={{ span: 16 }}>
						<div className='left_side'>
							<header>
								<h2 className='title'>Добавить товар</h2>
							</header>
							<div className='upload_pictures'>
								<h3>Фотографии</h3>
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
												onClick={() =>
													deleteImg(
														uploadedImgs[0]?.id
													)
												}
												src={
													uploadedImgs[0]?.image.startsWith(
														'ht'
													)
														? uploadedImgs[0]?.image
														: `${baseUrl}${uploadedImgs[0]?.image}`
												}
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
												onClick={() =>
													deleteImg(
														uploadedImgs[1]?.id
													)
												}
												src={
													uploadedImgs[1]?.image.startsWith(
														'ht'
													)
														? uploadedImgs[1]?.image
														: `${baseUrl}${uploadedImgs[1]?.image}`
												}
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
												onClick={() =>
													deleteImg(
														uploadedImgs[2]?.id
													)
												}
												src={
													uploadedImgs[2]?.image.startsWith(
														'ht'
													)
														? uploadedImgs[2]?.image
														: `${baseUrl}${uploadedImgs[2]?.image}`
												}
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
												onClick={() =>
													deleteImg(
														uploadedImgs[3]?.id
													)
												}
												src={
													uploadedImgs[3]?.image.startsWith(
														'ht'
													)
														? uploadedImgs[3]?.image
														: `${baseUrl}${uploadedImgs[3]?.image}`
												}
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
									<label htmlFor='title'>Название</label>
									<Input
										required
										type='text'
										value={formValues.title}
										onChange={handleInputChange}
										id='title'
										name='title'
									/>
								</Col>
								<Col span={8}>
									<label htmlFor='article'>Артикул</label>
									<Input
										required
										type='text'
										value={formValues.vendor_code}
										onChange={handleInputChange}
										id='article'
										name='vendor_code'
									/>
								</Col>
								<Col span={8}>
									<label htmlFor='litr'>Объем</label>
									<Input
										required
										type='number'
										value={formValues.litre}
										onChange={handleInputChange}
										id='litr'
										name='litre'
										placeholder='Литр'
									/>
								</Col>
								<Col span={24}>
									<label htmlFor='description'>
										Описание
									</label>
									<TextArea
										rows={8}
										id='description'
										value={formValues.description}
										onChange={handleInputChange}
										name='description'
									/>
								</Col>
								<Col span={24}>
									<div className='status_product'>
										<h2>Категории</h2>
										<select
											className='select_category'
											value={category}
											onChange={(e) =>
												setCategory(e.target.value)
											}
											name='category'>
											<option>Выбрать категорию</option>
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
							<h2 className='title'>Цена</h2>
							<Row gutter={[5, 5]}>
								<Col span={18}>
									<Input
										required
										type='text'
										onChange={handleInputChange}
										value={formValues.price}
										placeholder='0.00'
										name='price'
									/>
								</Col>
								<Col span={6}>Сум</Col>
							</Row>
							<div className='status_product'>
								<h2>Статус товара</h2>
								<Checkbox
									checked={statusProduct}
									onChange={handleInputChange}>
									Доступен в каталоге
								</Checkbox>
							</div>
							<div className='status_product'>
								<h2>Наличие на складе</h2>
								<Row gutter={[5, 5]}>
									<Col span={6}>В наличии</Col>
									<Col span={4}>
										<Input
											required
											value={formValues.in_stock}
											onChange={handleInputChange}
											name='in_stock'
										/>
									</Col>
								</Row>
							</div>
							<div className='status_product'>
								<Checkbox
									checked={delivered}
									onChange={handleDelivered}
									name='delivered'>
									Доставка
								</Checkbox>
							</div>
							<div className='sbm_btn'>
								<Button
									type='primary'
									htmlType='submit'
									onClick={handleSubmite}>
									Разместить
								</Button>
							</div>
						</div>
					</Col>
				</Row>
			</form>
		</EditProStyle>
	);
}

export default EditProduct;
