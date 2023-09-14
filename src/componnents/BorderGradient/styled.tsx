import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { IBorderGradientProps } from './BorderGradient';

interface IBorderGradientStyleProps extends Pick<IBorderGradientProps, 'space' | 'angle'> {
	gradient: IBorderGradientProps['color'];
}

export const BorderGradientStyle = styled(Box)<IBorderGradientStyleProps>(({ theme, gradient, space, angle }) => ({
	position: 'relative',
	paddingBottom: theme.spacing(space),
	'&::after': {
		content: '" "',
		width: '100%',
		display: 'block',
		position: 'absolute',
		bottom: 0,
		height: 1,
		background: `linear-gradient(${angle}deg, ${gradient} 0%, transparent 100%)`,
	}
}));
