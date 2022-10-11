import ScrollToTop from '../components/ScrollToTop';
import Admin from './Admin/Admin';
import MainLanding from './Landing/MainLanding';
import './App.css';

function App() {
	let user_info = JSON.parse(localStorage.getItem('user_info'));

	return (
		<>
			<ScrollToTop />
			{user_info?.user?.role === 'Manager' ? <Admin /> : <MainLanding />}
		</>
	);
}

export default App;
