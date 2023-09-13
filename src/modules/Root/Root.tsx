import { theme } from '@/theme/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface IRootProps {
	children: JSX.Element;
}

export const Root: FC<IRootProps> = ({ children }) => {

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				{children}
			</ThemeProvider>
		</Router>
	);
};
