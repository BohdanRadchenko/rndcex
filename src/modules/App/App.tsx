import { LazyLoader } from '@/componnents/LazyLoader';
import { lazy } from 'react';
import { AppStyled } from './styled';

const HomePage = LazyLoader(lazy(() => import(/* webpackChunkName: 'Home page' */ '../../pages/HomePage')));

export const App = () => {

	return (
		<AppStyled className="main">
			<HomePage/>
		</AppStyled>
	);
};
