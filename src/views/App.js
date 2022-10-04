import ScrollToTop from '../ScrollToTop';
import Admin from './Admin/Admin';
import MainLanding from './Landing/MainLanding';
import './App.css';
import Home from './Admin/containers/Home/Home';

import { useState } from 'react';
function App() {
	const [state, setState] = useState(true);
	let user_info = JSON.parse(localStorage.getItem('user_info'));

	return (
		<>
			<ScrollToTop />

			{state === true ? (
				user_info?.user?.role === 'Manager' ? (
					<Admin />
				) : (
					<MainLanding />
				)
			) : (
				<h2>loading</h2>
			)}
		</>
	);
}

export default App;
