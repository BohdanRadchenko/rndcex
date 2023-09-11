import { routes } from '@/routes';
import { useRoutes } from 'react-router-dom';
import { AppStyled } from './styled';

export const App = () => {
	const element = useRoutes(routes);

	return (
		<AppStyled className="main">
			{element}
		</AppStyled>
	);
};
