import { lazy } from 'react';
import AboutCompany from '../pages/Landing/AboutCompany';
import Register from '../pages/Admin/Auth/Register';
import SignIn from '../pages/Admin/Auth/SignIn';
import AdminSignIn from '../pages/Admin/Auth/AdminSignIn';
import Landing from '../pages/Landing/Landing';
import Partner from '../pages/Landing/Partner';
import Purchaser from '../pages/Landing/Purchaser';
import ProductView from '../pages/ProductView/ProductView';
import UserAccount from '../pages/UserAccount/UserAccount';
import EditProduct from '../pages/Admin/containers/EditProduct';
import LandingNews from '../pages/Landing/LandingNews/LandingNews';
import NewsDetail from '../pages/Landing/LandingNews/NewsDetail';
import ResetPassword from '../pages/Admin/Auth/RestPassword';
import SetPassword from '../pages/Admin/Auth/SetPassword';
import ProductDetail from '../pages/ProductView/ProductDetail';

let role = JSON.parse(localStorage.getItem('user_info'))?.data?.user?.role;

export const ROUTES = [
	{
		path: '/',
		component: <Landing />,
	},
	{
		path: '/partner',
		component: <Partner />,
	},
	{
		path: '/about',
		component: <AboutCompany />,
	},
	{
		path: '/service',
		component: <Purchaser />,
	},
	{
		path: '/news',
		component: <LandingNews />,
	},
	{
		path: '/news/:newsId',
		component: <NewsDetail />,
	},
	{
		path: '/sign-in',
		component: <SignIn />,
	},
	{
		path: '/sign-up',
		component: <Register />,
	},
	{
		path: '/rest-password',
		component: <ResetPassword />,
	},
	{
		path: '/set-password',
		component: <SetPassword />,
	},
	{
		path: '/products',
		component: <ProductView />,
	},
	{
		path: '/products/:productId',
		component: <ProductDetail />,
	},
	{
		path: '/my-account',
		// role ? <Navigate exact = {true}  to = "/my-account"/> : null
		component: <UserAccount />,
	},
	{
		path: '/admin-auth',
		component: <AdminSignIn />,
	},
];
