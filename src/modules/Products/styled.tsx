import { TypographyTitleWhite } from '@/componnents/Typography';
import { styled } from '@mui/material/styles';

export const CardTitleStyled = styled(TypographyTitleWhite)({
	fontFamily: 'Zetta',
	fontSize: 30,
	fontWeight: 400
});
export const CardSubtitleStyled = styled(CardTitleStyled)({
	fontFamily: 'Peta',
	fontSize: 26,
});

export const BackgroundImageStyled = styled('img')({
	position: 'absolute',
	bottom: 50,
	right: 0,
});
