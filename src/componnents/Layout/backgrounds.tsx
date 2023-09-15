import background11 from '@/images/background11.png';
import background2 from '@/images/background2.png';
import background21 from '@/images/background21.png';
import background211 from '@/images/background211.png';
import background3 from '@/images/background3.png';
import background31 from '@/images/background31.png';
import background42 from '@/images/background42.png';
import background51 from '@/images/background51.png';
import background6 from '@/images/background6.png';
import background61 from '@/images/background61.png';
import { styled } from '@mui/material/styles';

export const BaseBackground = styled('div')(({ theme: { extendPalette } }) => ({
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	right: 0,
	bottom: 0,
	left: 0,
	zIndex: 0,
	backgroundColor: '#000',
	backgroundImage: `linear-gradient(318.17deg, ${extendPalette.brown75} 14.17%, ${extendPalette.dark100} 114%)`,
}));

export const BackgroundBaseLight = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	background: `linear-gradient(136deg, ${extendPalette.orange75}00 50%, ${extendPalette.orange75}0C 100%), ${extendPalette.light90}`
}));

export const BackgroundWorkSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background3}), linear-gradient(274.39deg, ${extendPalette.aqua75} -17.7%, ${extendPalette.dark100} 100.12%)`
}));

export const BackgroundPricingSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background2}), linear-gradient(0deg, ${extendPalette.brown75} -48.75%, ${extendPalette.dark100} 100%)`
}));

export const BackgroundProductsSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background21}), linear-gradient(302deg, ${extendPalette.brown75} -2.25%, ${extendPalette.dark100} 51%)`
}));

export const BackgroundManagementSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background6}), linear-gradient(302deg, ${extendPalette.brown75} -2.25%, ${extendPalette.dark100} 51%)`
}));

export const BackgroundSecuritySection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background61}), linear-gradient(74deg, ${extendPalette.brown75} 1%, ${extendPalette.dark100} 64%)`
}));

export const BackgroundCryptoExchangeSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background31}), linear-gradient(318deg, ${extendPalette.aqua75} -25%, ${extendPalette.dark100} 77%)`
}));

export const BackgroundSolutionServicesSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background211}), linear-gradient(0deg, ${extendPalette.brown75} -49%, ${extendPalette.dark100} 100%)`
}));

export const BackgroundHeadSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background11}), radial-gradient(155% 155% at 9% 141%, ${extendPalette.aqua75} 0%, ${extendPalette.dark100} 100%)`,
}));

export const BackgroundChooseSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background51}), radial-gradient(50% 128% at 50% 50%, ${extendPalette.aqua85} 0%, ${extendPalette.dark100} 100%)`,
}));

export const BackgroundAdminPanelSection = styled(BaseBackground)(({ theme: { extendPalette } }) => ({
	backgroundImage:
		`url(${background42}), radial-gradient(79% 201% at 78% 50%, ${extendPalette.aqua85} 0%, ${extendPalette.dark100} 100%)`,
}));
