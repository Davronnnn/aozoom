import React, { useState, useRef, useContext } from 'react';
import { Button, Input, Space, Select, Dropdown, Menu, message } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { StyledContainer } from '../../styles/Container.style';
import { NavLink, useNavigate } from 'react-router-dom';
import { StyledNavbar } from './Navbar.style';
import { Col, Row } from 'antd';
import Logo from '../../assets/img/logo2.svg';
import Birja from '../../assets/img/Birja.svg';
import Neft from '../../assets/img/neft-logo.svg';
import HomeIcon from '../../assets/img/home-icon.svg';
import CompanyIcon from '../../assets/img/company-icon.svg';
import PartnerIcon from '../../assets/img/partner-icon.svg';
import PurchaserIcon from '../../assets/img/purchaser-icon.svg';
import ProductIcon from '../../assets/img/product-icon.svg';
import Menuicon from '../../assets/img/menu-icon.svg';
import { MenuIcon, SearchIcon } from '../../utils/Images';
import COLORS from '../../constants/colors';
import { UserIcon, ShopCartIcon } from '../../utils/Images';
import { StyledNavUl } from './NavUl.style';
import Tread from './Tread';
import Navigation from './Navigation';
import useFetchHook from '../../customhooks/useFetchHook';
import axios from 'axios';
import Axios from '../../utils/axios';
import Basket from '../Basket/Basket';
import { useDispatch, useSelector } from 'react-redux';
import HeaderCarousel from './HeaderCarousel';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../../Redux/language/languageSlice';
import { SearchContext } from '../../views/Landing/SeacrhContext';
import { SelectContext } from './SelectContext';

const { Search } = Input;
const { Option } = Select;

function Navbar(props) {
	const [search, setSearch] = useState('');
	const [showModal, setShowModal] = useState(false);
	const { value, setValue } = useContext(SearchContext);
	const { select, setSelect } = useContext(SelectContext);
	const [cartList, setCartList] = useState();
	const [hideMenu, setHideMenu] = useState(false);
	const navigate = useNavigate();
	const inputRef = useRef();
	const { t, i18n } = useTranslation();
	const getCarts = async () => {
		try {
			const res = await Axios.get('/cart');
			setCartList(res?.data?.results);
		} catch (error) {}
	};
	const openModal = async () => {
		getCarts();
		setShowModal(true);
	};
	const handleCancel = () => {
		setShowModal(!showModal);
	};

	const showMenu = () => {
		setHideMenu((prev) => !prev);
	};

	const handleInput = (e) => {
		let location = window.location.pathname;
		setValue(e.target.value);
		if (location !== '/products') {
			navigate('/products');
		}
	};
	const handleSelect = (e) => {
		let location = window.location.pathname;
		setSelect(e.key);
		if (location !== '/products') {
			navigate('/products');
		}
	};
	const responSearch = () => {
		setHideMenu(true);
		focusInput();
	};

	const focusInput = () => {
		inputRef.current.focus();
	};
	const removeItemFromBasket = async (id) => {
		try {
			const res = await Axios.delete(`/cart/cartitem/${id}`);
			if (res.status === 200) {
				getCarts();
			}
		} catch (error) {}
	};
	const loginToAccount = () => {
		let user = JSON.parse(localStorage.getItem('user'));
		if (user?.token) {
			if (user.admin.role == 'Customer') {
				navigate('/my-account');
			}
		} else {
			navigate('/sign-in');
		}
	};

	const menu = (
		<Menu
			onClick={(key) => handleSelect(key)}
			items={[
				{
					label: <p>{t('p86')} </p>,
					key: '2',
				},
				{
					label: <p> {t('p87')} </p>,
					key: '1',
				},
				{
					label: <p> {t('p88')}</p>,
					key: '3',
				},
			]}
		/>
	);
	const dispatch = useDispatch();

	const changeLangugae = (e) => {
		const langugae = e.target.value;
		dispatch(setLanguage(langugae));
		i18n.changeLanguage(langugae);
	};
	return (
		<>
			<Basket
				isVisible={props.isVisible}
				cartList={props.cartList}
				removeItemFromBasket={props.removeItemFromBasket}
				handleCancel={props.handleCancel}
			/>
			<StyledNavbar>
				<HeaderCarousel />

				<StyledContainer>
					<div className='container'>
						<div className='wrapper'>
							<div className='logoBlock'>
								<div onClick={showMenu}>
									<img
										className='menuIcon'
										src={Menuicon}
										alt='icon'
									/>
								</div>
								<a href='/' className='logoImgHref'>
									<img
										className='logoImg'
										src={Logo}
										alt='Logo'
									/>
								</a>
								<div className='birja_block'>
									<img src={Birja} alt='logo' />
								</div>
							</div>
							<div>
								<div
									className='searchBlock'
									onClick={focusInput}>
									<input
										type='text'
										value={value}
										onChange={handleInput}
										ref={inputRef}
										placeholder={t('p24')}
									/>
									<SearchOutlined
										style={{
											fontSize: 20,
											color: `${COLORS.black}`,
										}}
									/>
								</div>
							</div>
							<div>
								<div className='nav-userAccount'>
									<div
										className='respons-search'
										onClick={responSearch}>
										<SearchIcon />
									</div>
									<div className='user-account'>
										<button onClick={loginToAccount}>
											<UserIcon />
											<span>{t('p0')}</span>
										</button>
									</div>
									<div className='user-shopCart'>
										<button onClick={props.openModal}>
											<ShopCartIcon />
											<span>{t('p1')}</span>
										</button>
									</div>
									<select onChange={changeLangugae}>
										<option value='ru'>Ru</option>
										<option value='uz'>Uz</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</StyledContainer>
				<StyledContainer>
					<div
						className='respons-menu'
						style={{ top: hideMenu ? '95px' : '-600px' }}>
						<div>
							<div className='searchBlock' onClick={focusInput}>
								<input
									type='text'
									value={value}
									onChange={handleInput}
									ref={inputRef}
									placeholder='Поиск по товарам'
								/>
								<SearchOutlined
									style={{
										fontSize: 20,
										color: `${COLORS.black}`,
									}}
								/>
							</div>
						</div>
						<Navigation showMenu={showMenu} />
					</div>
				</StyledContainer>
			</StyledNavbar>
			<StyledNavUl>
				<StyledContainer>
					<div className='container'>
						<div className='navigation'>
							<nav style={{ 'background-color': '#364A7E' }}>
								<div
									style={{
										display: 'flex',
										alignItems: 'center',
									}}>
									<div className='nav_link' to='/'>
										<img src={Neft} />
										<Dropdown
											overlay={menu}
											on
											placement='bottomLeft'>
											<Space>{t('p2')}</Space>
										</Dropdown>
									</div>
								</div>
								<div>
									<NavLink className='nav_link' to='/'>
										<img src={HomeIcon} />
										{t('p3')}
									</NavLink>
								</div>
								<div>
									<NavLink className='nav_link' to='/about'>
										<img src={CompanyIcon} />
										{t('p4')}
									</NavLink>
								</div>
								<div>
									<NavLink className='nav_link' to='/partner'>
										<img src={PartnerIcon} />
										{t('p5')}
									</NavLink>
								</div>
								<div>
									<NavLink className='nav_link' to='/service'>
										<img src={PurchaserIcon} />
										{t('p6')}
									</NavLink>
								</div>
								<div>
									<NavLink
										className='nav_link'
										to='/products'>
										<img src={ProductIcon} />
										{t('p7')}
									</NavLink>
								</div>
							</nav>
						</div>
					</div>
				</StyledContainer>
			</StyledNavUl>
		</>
	);
}

export default Navbar;
