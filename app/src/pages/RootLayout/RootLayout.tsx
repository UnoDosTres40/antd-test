import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader } from './components';


export const RootLayout: FC = () => {
	return (
		<>
			<AppHeader/>
			<Outlet />
		</>
	);
};
