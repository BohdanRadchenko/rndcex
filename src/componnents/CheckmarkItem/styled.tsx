import { ReactComponent as Icon } from '@/icons/Checkmark.svg';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckmarkText = styled((props: TypographyProps) =>
	<Typography {...props} variant="subtitle"/>)(({ theme: { palette: { typography } } }) => ({
	color: typography.white,
	fontSize: 26,
}));

export const CheckmarkIcon = styled(Icon)({
	flexShrink: 0,
});
