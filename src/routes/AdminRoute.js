import { lazy } from 'react';
import Application from '../pages/Admin/containers/Applications/Application';
import Home from '../pages/Admin/containers/Home/Home';
import Partners from '../pages/Admin/containers/Partners/Partners';
import Orders from '../pages/Admin/containers/Orders/Orders';
import Purchases from '../pages/Admin/containers/Purchases/Purchases';
import Addproduct from '../pages/Admin/containers/AddProduct/Addproduct';
import Exchange from '../pages/Admin/containers/Exchange/Exchange';
import EditProduct from '../pages/Admin/containers/EditProduct';
import News from '../pages/Admin/containers/News/News';
import AddNews from '../pages/Admin/containers/News/AddNews';

export const ADMIN_ROUTES = [
	{
		path: '/',
		component: <Home />,
	},
	{
		path: '/orders',
		component: <Orders />,
	},
	{
		path: '/purchases',
		component: <Purchases />,
	},
	{
		path: '/purchases/:productId',
		component: <EditProduct />,
	},
	{
		path: '/questions',
		component: <Application />,
	},
	{
		path: '/partners',
		component: <Partners />,
	},
	{
		path: '/add-product',
		component: <Addproduct />,
	},
	{
		path: '/exchanges',
		component: <Exchange />,
	},
	{
		path: '/news',
		component: <News />,
	},
	{
		path: '/add-news',
		component: <AddNews />,
	},
];
