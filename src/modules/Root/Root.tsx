import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

interface IRootProps {
	children: JSX.Element;
}

export const Root: FC<IRootProps> = ({ children }) => {
	return (
		<Router>
			{children}
		</Router>
	);
};
