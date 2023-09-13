import { CardBackground } from '@/componnents/CardBackground';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(CardBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage: `linear-gradient(274deg, ${extendPalette.aqua75} -17.7%, #000000 100%), #000000`,
}));

export const CardTitleStyled = styled(Typography)(({ theme: { palette: { typography } } }) => ({
	color: typography.accent,
	whiteSpace: 'pre',
	fontSize: 30,
}));

export const BackgroundImageStyled = styled('img')({
	position: 'absolute',
	bottom: 50,
	right: 0,
});
