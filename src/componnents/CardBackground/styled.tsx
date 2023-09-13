import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardBackgroundStyled = styled(Card)(({ theme: { spacing, extendPalette } }) => ({
	padding: spacing(5),
	border: `1px solid ${extendPalette.cardBorderColorSecondary}`,
	backgroundColor: extendPalette.dark75,
	position: 'relative',
	flex: 1,
	// radial-gradient(89.02% 128% at 100% 100%, #3E1D00 0%, #181818 100%)
	// `radial-gradient(at 30% 100%, ${extendPalette.brown75} 0%, ${extendPalette.dark75} 100%)`,
	backgroundImage:
		`radial-gradient(circle at 89%, ${extendPalette.brown75} 0%, ${extendPalette.dark75} 100%)`,
}));
