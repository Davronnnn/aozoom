import { lazy } from 'react';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { IoMdListBox } from 'react-icons/io';
import { BsNewspaper } from 'react-icons/bs';

import { BiShoppingBag, BiTask, BiHome } from 'react-icons/bi';
import { MdOutlinePersonOutline } from 'react-icons/md';

// const OrderList = lazy(() => import("../../views/OrderList"));
// const SignUp = lazy(() => import("../../views/Auth/SignUp"));
// const SignIn = lazy(() => import("../../views/Auth/SignIn"));
// const Category = lazy(() => import("../../views/Category"));
// const Foods = lazy(() => import("../../views/Foods"));
// const Dashboard = lazy(() => import("../../views/Dashboard"));

const routes = [
	{
		path: '/',
		// element: Dashboard,
		icon: <BiHome size={24} />,
		title: 'Главная',
	},
	{
		path: '/purchases',
		// element: Category,
		icon: <BiTask size={24} />,
		title: 'Товары',
	},
	{
		path: '/orders',
		// element: Foods,
		icon: <BiShoppingBag size={24} />,
		title: 'Заказы',
	},
	{
		path: '/questions',
		// element: OrderList,
		icon: <MdOutlinePersonOutline size={24} />,
		title: 'Заявки и вопросы',
	},
	{
		path: '/partners',
		// element: OrderList,
		icon: <HiOutlineClipboardList size={24} />,
		title: 'Партнеры',
	},
	{
		path: '/exchanges',
		// element: OrderList,
		icon: <IoMdListBox size={24} />,
		title: 'Бегущая дорожка',
	},
	{
		path: '/news',
		// element: OrderList,
		icon: <BsNewspaper size={24} />,
		title: 'Новости',
	},
];
export default routes;
