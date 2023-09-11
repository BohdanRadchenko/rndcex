import { Container } from '@/componnents/Container';
import { LayoutStyled } from '@/componnents/Layout/styled';
import * as React from 'react';
import { FC } from 'react';

export interface ILayoutProps {
	children: JSX.Element;
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<LayoutStyled>
			<Container>
				{children}
			</Container>
		</LayoutStyled>
	);
};
