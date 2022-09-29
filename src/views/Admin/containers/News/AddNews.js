import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { Editor } from '@tinymce/tinymce-react';
import { StyledAddNews } from './News.style';
import Axios from '../../../../utils/axios';
import { Button, Input } from 'antd';
import colors from '../../../../constants/colors';

const { TextArea } = Input;

function AddNews() {
	const imgRef1 = useRef();
	const editorRef = useRef(null);
	const [uploadedImgs, setUploadedImgs] = useState();
	const [items, setItems] = useState([]);
	const [uplodedImgsId, setUplodedImgsId] = useState([]);
	const [image, setImage] = useState();
	const [date, setDate] = useState('');
	const [componentId, setComponentId] = useState([]);
	const counts = new Date().getUTCMilliseconds();
	const [description, setDescription] = useState();
	const [formValues, setFormValues] = useState({
		title: '',
		short_description: '',
	});

	let adminInfo = JSON.parse(localStorage.getItem('user_info'));

	let header = {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${adminInfo.token?.access}`,
	};
	const img = useRef();
	const addItem = () => {
		setItems([
			...items,
			{
				id: counts,
				text: '',
				image: '',
			},
		]);
	};
	const submitComponent = async () => {
		const result = [];
		let newArr = [
			...items,
			{
				text: JSON.stringify(description),
				image: img.current.files[0] ? img.current.files[0] : '',
			},
		];
		let arr = newArr.map((item) => {
			return {
				text: item.text,
				image: item.image,
			};
		});
		console.log(arr);
		let formDatas = [];
		for (const element of arr) {
			const formData = new FormData();
			for (const property in element) {
				formData.append(property, element[property]);
			}
			formDatas.push(formData);
		}

		for (let i = 0; i < formDatas.length; i++) {
			try {
				const res = await Axios.post('/blog/component/', formDatas[i], {
					headers: header,
				});
				const { status, data } = res;
				console.log(data);
				if (status == 201) {
					result.push({ id: data.id });
					setComponentId([...componentId, { id: data.id }]);
					console.log(componentId);
				}
			} catch (error) {}
		}
		return result;
	};

	const handleInputChange = useCallback((e) => {
		const { name, value } = e.target;
		setFormValues((state) => ({ ...state, [name]: value }));
	}, []);

	const handleFocus = (inp) => {
		inp.current.click();
	};

	const textHandler = (e, id) => {
		console.log(items);
		let filteredItem = items.filter((item) => item.id == id);
		console.log(filteredItem);
		filteredItem[0].text = e;
	};
	const imgHandler = (e, id) => {
		console.log(items);
		let filteredItem = items.filter((item) => item.id == id);
		console.log(filteredItem);
		filteredItem[0].image = e.target.files[0];
	};

	const uploadImg = async (inpFile) => {
		const formData = new FormData();
		formData.append('image', inpFile.current.files[0]);
		try {
			const res = await Axios.post(`/blog/cover/`, formData, {
				headers: header,
			});
			setUploadedImgs(res?.data.id);
		} catch (error) {}
	};

	const handleSubmit = async (callback) => {
		const result = await callback();
		console.log(componentId);
		try {
			const res = await Axios.post(
				'/blog/',
				{
					components: result,
					cover_image: {
						id: uploadedImgs,
					},
					...formValues,
					published_date: date,
				},
				{ headers: header }
			);
		} catch (error) {}
	};

	console.log(description, 'tiny');
	return (
		<StyledAddNews>
			<div className='main'>
				<h1 className='title'>Добавить Новость</h1>
				<div>
					{/* <form> */}
					<h3>Обложка</h3>
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
								<BsPlusLg color={colors.main} size='50' />
								<input
									required
									ref={imgRef1}
									onChange={() => uploadImg(imgRef1)}
									type='file'
								/>
							</>
						)}
					</div>
					<div className='input_block'>
						<label htmlFor='title'>Название</label>
						<Input
							type='text'
							onChange={handleInputChange}
							name='title'
							id='title'
							value={formValues.title}
						/>
					</div>
					<div className='input_block'>
						<label htmlFor='short_description'>
							Краткое описание
						</label>
						<TextArea
							rows={4}
							onChange={handleInputChange}
							name='short_description'
							id='short_description'
							value={formValues.short_description}
						/>
					</div>
					<div className='extra_news'>
						<div className='input_block'>
							<label name='extra_description'>Описание</label>
							{/* <TextArea
                rows={4}
                onChange={(e) => setDescription(e.target.value)}
                name="short_description"
                id="short_description"
              /> */}
							<Editor
								apiKey='12pyooxak2lnpf0lfl9e6r8dra60u6u5mxwf38qop1m4uncr'
								onInit={(evt, editor) =>
									(editorRef.current = editor)
								}
								onChange={(e) =>
									setDescription(e.target.getContent())
								}
								init={{
									height: 300,
									menubar: false,
									plugins: [
										'advlist autolink lists link image charmap print preview anchor',
										'searchreplace visualblocks code fullscreen',
										'insertdatetime media table paste code help wordcount',
									],
									toolbar:
										'undo redo | formatselect | ' +
										'bold italic backcolor | alignleft aligncenter ' +
										'alignright alignjustify | bullist numlist outdent indent | ' +
										'removeformat | help',
									content_style:
										'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
								}}
							/>
						</div>
						<div className='input_block'>
							<input type='file' ref={img} />
						</div>
					</div>
					{items.map((item) => {
						const { id, description } = item;
						return (
							<div className='extra_news' key={id}>
								<div className='input_block'>
									<label name='extra_description'>
										Описание
									</label>
									{/* <TextArea
                    rows={4}
                    onChange={(e) => textHandler(e.target.value,id)}
                    name="short_description"
                    id="short_description"
                  /> */}
									<Editor
										apiKey='12pyooxak2lnpf0lfl9e6r8dra60u6u5mxwf38qop1m4uncr'
										onInit={(evt, editor) =>
											(editorRef.current = editor)
										}
										onChange={(e) =>
											textHandler(
												e.target.getContent(),
												id
											)
										}
										init={{
											height: 300,
											menubar: false,
											plugins: [
												'advlist autolink lists link image charmap print preview anchor',
												'searchreplace visualblocks code fullscreen',
												'insertdatetime media table paste code help wordcount',
											],
											toolbar:
												'undo redo | formatselect | ' +
												'bold italic backcolor | alignleft aligncenter ' +
												'alignright alignjustify | bullist numlist outdent indent | ' +
												'removeformat | help',
											content_style:
												'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
										}}
									/>
								</div>
								<div className='input_block'>
									<input
										onChange={(e) => imgHandler(e, id)}
										type='file'
										ref={img}
									/>
								</div>
							</div>
						);
					})}
					<button className='add-button' onClick={addItem}>
						+
					</button>
					<div className='input_block'>
						<div className='date_block'>
							<label htmlFor='date'>Дата</label>
							<Input
								type='date'
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>
					</div>
					{/* </form> */}
				</div>
				<Button
					type='primary'
					className='submit_btn'
					onClick={() => handleSubmit(submitComponent)}>
					{' '}
					Опубликовать
				</Button>
			</div>
		</StyledAddNews>
	);
}

export default AddNews;
