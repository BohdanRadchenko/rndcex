import background2 from '@/images/background2.png';
import background21 from '@/images/background21.png';
import background3 from '@/images/background3.png';
import background6 from '@/images/background6.png';
import { styled } from '@mui/material/styles';

const BaseBackground = styled('div')({
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 0,
	backgroundColor: '#000',
});

export const BackgroundWorkSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background3}), linear-gradient(274.39deg, ${extendPalette.aqua75} -17.7%, #000000 100.12%)`
}));

export const BackgroundPricingSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background2}), linear-gradient(0deg, ${extendPalette.brown75} -48.75%, #000000 100%)`
}));

export const BackgroundProductsSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background21}), linear-gradient(302deg, ${extendPalette.brown75} -2.25%, #000000 51%)`
}));

export const BackgroundManagementSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background6}), linear-gradient(302deg, ${extendPalette.brown75} -2.25%, #000000 51%)`
}));
