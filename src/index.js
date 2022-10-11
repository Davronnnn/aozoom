import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';
import 'antd/dist/antd.less';
import 'normalize.css';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './lang/i18n';
//importing redux toolkit store
import { store as reduxToolkitStore } from './Redux/store';
import { Provider as ReduxToolkitProvider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
	position: positions.TOP_CENTER,
	timeout: 5000,
	offset: '30px',
	transition: transitions.SCALE,
};

root.render(
	<ReduxToolkitProvider store={reduxToolkitStore}>
		{/* <Provider store={store}> */}
		<PersistGate persistor={persistor}>
			<AlertProvider template={AlertTemplate} {...options}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AlertProvider>
		</PersistGate>
		{/* </Provider> */}
	</ReduxToolkitProvider>
);
