import { theme } from '@/theme/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

interface IRootProps {
	children: JSX.Element;
}

export const Root: FC<IRootProps> = ({ children }) => {

	return (
		<HashRouter basename="#">
			<ThemeProvider theme={theme}>
				<CssBaseline/>
				{children}
			</ThemeProvider>
		</HashRouter>
	);
};
