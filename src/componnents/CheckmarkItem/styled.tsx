import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckmarkText = styled((props: TypographyProps) =>
	<Typography {...props} variant="subtitle"/>)(({ theme: { palette: { typography } } }) => ({
	color: typography.white,
	fontSize: 26,
}));
