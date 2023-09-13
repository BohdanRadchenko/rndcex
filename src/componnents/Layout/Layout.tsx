import { Container } from '@/componnents/Container';
import { LayoutStyled } from '@/componnents/Layout/styled';
import { FC, memo } from 'react';

export interface ILayoutProps {
	children: JSX.Element | JSX.Element[];
}

export const Layout: FC<ILayoutProps> = memo(({ children }) => {
	return (
		<LayoutStyled>
			<Container>
				{children}
			</Container>
		</LayoutStyled>
	);
});
