import { TypographyTitleWhite } from '@/componnents/Typography';
import { styled } from '@mui/material/styles';

export const TitleStyled = styled(TypographyTitleWhite)(({ theme: { palette: { typography } } }) => ({
	color: typography.accent,
}));

export const SubtitleStyled = styled(TitleStyled)(({ theme: { palette: { typography } } }) => ({
	color: typography.secondary,
	fontFamily: 'Peta',
	fontSize: 30,
	fontWeight: 400,
}));

export const CardTitleStyled = styled(TitleStyled)({
	fontFamily: 'Tera',
	fontSize: 46,
});

export const CardDataTitleStyled = styled(SubtitleStyled)({
	fontFamily: 'Zetta',
});

export const CardDataSubtitleStyled = styled(CardDataTitleStyled)({
	fontFamily: 'Peta',
	fontSize: 26,
});
