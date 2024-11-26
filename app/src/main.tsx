import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './styles/index.css';
import './styles/variables.css';
import './styles/normalize.css';
import './styles/class-names.scss';
import { BrowserRouter } from 'react-router-dom';
import  theme  from './styles/theme.module.less'
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
	<BrowserRouter>
		<ConfigProvider theme={theme}>
			<App />
		</ConfigProvider>
	</BrowserRouter>
	</StrictMode>,
);
