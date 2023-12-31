import { CardBackground } from '@/componnents/CardBackground';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(CardBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage: `radial-gradient(89% 128% at 100% 100%, ${extendPalette.brown75} 0%, #181818 100%)`,
}));

export const HeadTitleText = styled(TypographyTitleWhite)(({ theme: { palette: { typography } } }) => ({
	color: typography.white,
}));

export const HeadSubtitleText = styled(Typography)(({ theme: { palette: { typography } } }) => ({
	color: typography.secondary,
	fontFamily: 'Peta',
	fontSize: 30,
	fontWeight: 400,
}));

export const PriceShapeWrapper = styled('div')(({ theme: { spacing, extendPalette } }) => ({
	backgroundColor: extendPalette.orange75,
	margin: spacing(0, 1.4),
	padding: spacing(1.5, 3.8),
	display: 'flex',
	position: 'relative',
	transform: 'skew(-20deg)',
	borderRadius: '10px',
}));

export const PriceShapeText = styled(HeadSubtitleText)(({ theme: { palette: { typography } } }) => ({
	fontSize: 46,
	fontFamily: 'Tera',
	color: typography.white,
}));

export const SupportTitle = styled(HeadSubtitleText)(({ theme: { palette: { typography } } }) => ({
	color: typography.accent,
	fontSize: 46,
	fontFamily: 'Tera',
}));

export const SupportSubtitle = styled(SupportTitle)(({ theme: { palette: { typography } } }) => ({
	color: typography.white,
	fontSize: 30,
	fontFamily: 'Zetta',
	textTransform: 'uppercase',
}));

export const SupportBodyText = styled(SupportSubtitle)(({ theme: { palette: { typography } } }) => ({
	fontSize: 26,
	fontFamily: 'Peta',
	textTransform: 'none',
	maxWidth: 474,
}));


