import { ELayoutColorSchema } from '@/componnents/Layout';
import { ILogoProps } from '@/componnents/Logo/Logo';
import { styled } from '@mui/material/styles';
/**
 * @deprecated
 */
import styledDep from 'styled-components';

interface ILayoutSectionStyledProps extends Pick<ILogoProps, 'colorSchema'> {
}

export const LayoutStyled = styled('div')<ILayoutSectionStyledProps>(({ colorSchema, theme: { extendPalette } }) => ({
	position: 'relative',
	width: '100%',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	backgroundColor: colorSchema === ELayoutColorSchema.LIGHT ? extendPalette.backgroundColorLight : extendPalette.backgroundColorBlack
}));

export const LayoutSectionStyled = styledDep.section`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LogoWrapper = styledDep.div`
  line-height: 1;
  margin: 0 0 80px;
`;
