import { CardBackground } from '@/componnents/CardBackground';
import { BackgroundHeadSection, ELayoutColorSchema, ILayoutProps, Layout } from '@/componnents/Layout';
import { Logo } from '@/componnents/Logo';
import { ILogoProps } from '@/componnents/Logo/Logo';
import { TypographyTitleAccent } from '@/componnents/Typography';
import snap11 from '@/images/snap1-1.png';
import snap12 from '@/images/snap1-2.png';
import { Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerStyled = styled(Box)({
	padding: '0 5.468%',
});

export const LayoutStyled = styled((props: ILayoutProps) =>
	<Layout
		{...props}
		colorSchema={ELayoutColorSchema.DARK}
		backgroundComponent={BackgroundHeadSection}
	/>)({});

const backgroundShapesDefaultProps = {
	content: '" "',
	display: 'block',
	position: 'absolute',
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	width: '40%',
	height: '46%',
	maxWidth: 780,
	maxHeight: 540,
};

export const HeadShapes = styled(Box)(({ theme: { breakpoints } }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	transform: 'rotate(180deg)',
	'&::before': {
		...backgroundShapesDefaultProps,
		top: -44,
		right: 117,
		backgroundImage: `url(${snap11})`,
		transform: 'scale(1.2)',
		display: 'none',
		[breakpoints.up('xl')]: {
			display: 'block',
		},
	},
	'&::after': {
		...backgroundShapesDefaultProps,
		transform: 'rotate(180deg) scale(1.2)',
		backgroundImage: `url(${snap12})`,
		bottom: -36,
		left: 118,
	}
}));

export const LogoStyled = styled((props: ILogoProps) =>
	<Logo {...props} colorSchema={ELayoutColorSchema.COLOR}/>)({});

export const WrapperStyled = styled(Stack)(({ theme: { spacing } }) => ({
	padding: spacing(8, 0),
	position: 'relative',
	width: '100%',
	height: 'inherit',
	flexGrow: 1,
	gap: spacing(5),
}));

export const Card = styled(CardBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage: `radial-gradient(122% 176% at 112% 111%, ${extendPalette.aqua75} 0%, ${extendPalette.dark75} 100%)`,
	minHeight: '100%'
}));

export const SubtitleStyle = styled(TypographyTitleAccent)({
	fontSize: 30,
	fontWeight: 400,
	width: '100%',
});

export const BodyTitleStyle = styled(SubtitleStyle)(({ theme: { palette: { typography } } }) => ({
	fontSize: 26,
	fontFamily: 'Peta',
	color: typography.secondary,
}));
