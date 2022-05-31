import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './Context/AuthContext';

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<AuthProvider>
		<Router>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</Router>
	</AuthProvider>
);
