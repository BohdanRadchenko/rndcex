import { CardBackground } from '@/componnents/CardBackground';
import { TypographyTitleAccent } from '@/componnents/Typography';
import { styled } from '@mui/material/styles';

export const Card = styled(CardBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage: `radial-gradient(122% 176% at 112% 111%, ${extendPalette.aqua75} 0%, ${extendPalette.dark75} 100%)`,
	minHeight: '100%'
}));

export const CardTitleStyled = styled(TypographyTitleAccent)({
	fontWeight: 400,
	fontSize: 46,
	fontFamily: 'Tera'
});
