import { Route, Routes } from 'react-router-dom';
import {Page, RootLayout} from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<RootLayout />}/>
			<Route path="log" element={Page}/>


		</Routes>
	);
};
