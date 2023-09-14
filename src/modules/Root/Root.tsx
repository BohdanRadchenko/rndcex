import { theme } from '@/theme/theme';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { FC } from 'react';

interface IRootProps {
	children: JSX.Element;
}

export const Root: FC<IRootProps> = ({ children }) => {

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			{children}
		</ThemeProvider>
	);
};
