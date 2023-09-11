import { Container } from '@/componnents/Container';
import { Logo } from '@/componnents/Logo';
import * as React from 'react';
import { FC } from 'react';
import { ILayoutProps } from '../Layout';
import { LayoutSectionStyled, LayoutStyled, LogoWrapper } from '../styled';

export interface ILayoutLogoProps extends ILayoutProps {
}

export const LayoutLogo: FC<ILayoutLogoProps> = ({ children }) => {
	return (
		<LayoutStyled>
			<Container>
				<LayoutSectionStyled>
					{children}
				</LayoutSectionStyled>
				<LogoWrapper>
					<Logo/>
				</LogoWrapper>
			</Container>
		</LayoutStyled>
	);
};
