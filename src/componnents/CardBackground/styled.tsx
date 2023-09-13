import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardBackgroundStyled = styled(Card)(({ theme: { spacing, extendPalette } }) => ({
	padding: spacing(5),
	border: `1px solid ${extendPalette.cardBorderColorSecondary}`,
	backgroundColor: extendPalette.dark75,
}));
