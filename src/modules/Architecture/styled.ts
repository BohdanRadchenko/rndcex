import img from '@/images/section7.png';
import { styled } from '@mui/material';

export const BackgroundStyled = styled('div')({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundImage: `url(${img})`,
	backgroundSize: 'contain',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	zIndex: 0,
});
