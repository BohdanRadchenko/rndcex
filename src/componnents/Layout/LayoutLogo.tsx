import { FC, memo } from 'react';
import { Container } from '../Container/index';
import { Logo } from '../Logo/index';
import { ILayoutProps, Layout } from './Layout';
import { LayoutSectionStyled, LogoWrapper } from './styled';

export const LayoutLogo: FC<ILayoutProps> = memo(({ children, colorSchema, ...props }) => {
	return (
		<Layout colorSchema={colorSchema} {...props}>
			<Container>
				<LayoutSectionStyled>
					{children}
				</LayoutSectionStyled>
				<LogoWrapper>
					<Logo colorSchema={colorSchema}/>
				</LogoWrapper>
			</Container>
		</Layout>
	);
});
