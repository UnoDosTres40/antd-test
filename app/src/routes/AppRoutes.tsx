import { Route, Routes } from 'react-router-dom';
import {LoginPage, RegPage, RootLayout} from '../pages';

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />}/>
			<Route path="/reg" element={<RegPage/>}/>
			<Route path="/" element={<RootLayout/>}>

			</Route>


		</Routes>
	);
};
