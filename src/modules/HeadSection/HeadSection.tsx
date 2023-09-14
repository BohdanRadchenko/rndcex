import { memo } from 'react';
import { HeadSectionContent } from './HeadSectionContent';
import { ContainerStyled, HeadShapes, LayoutStyled, LogoStyled, WrapperStyled } from './styled';

export const HeadSection = memo(() => {
	return (
		<LayoutStyled>
			<HeadShapes/>
			<WrapperStyled>
				<ContainerStyled>
					<LogoStyled/>
				</ContainerStyled>
				<HeadSectionContent/>
			</WrapperStyled>
		</LayoutStyled>
	);
});
