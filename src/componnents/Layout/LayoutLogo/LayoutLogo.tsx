import { ELogoColorSchema } from '@/componnents/Logo';
import { ILogoProps } from '@/componnents/Logo/Logo';
import { FC, memo } from 'react';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { ILayoutProps } from '../Layout';
import { LayoutSectionStyled, LayoutStyled, LogoWrapper } from '../styled';

type OtherProps = ILayoutProps & ILogoProps

export interface ILayoutLogoProps extends OtherProps {
}

export const LayoutLogo: FC<ILayoutLogoProps> = memo(({ children, colorSchema = ELogoColorSchema.LIGHT }) => {
	return (
		<LayoutStyled colorSchema={colorSchema}>
			<Container>
				<LayoutSectionStyled>
					{children}
				</LayoutSectionStyled>
				<LogoWrapper>
					<Logo colorSchema={colorSchema}/>
				</LogoWrapper>
			</Container>
		</LayoutStyled>
	);
});
