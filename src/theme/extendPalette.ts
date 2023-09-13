// light
const light100 = '#ffffff';

// dark
const dark100 = '#000000';
const dark75 = '#181818';

// gray
const gray75 = '#D8D8D8';
const gray50 = '#E0E0E0';
const gray25 = '#F5F5F5';
const gray10 = '#FBFBFB';

// orange
const orange75 = '#FF7900';

// yellow
const yellow75 = '#FFE600';

// aqua
const aqua75 = '#004F45';

// green
const green75 = '#96FF00';

//style
const backgroundColorLight = gray10;
const backgroundColorBlack = dark100;
const backgroundMain = backgroundColorLight;

const cardBorderColorPrimary = gray75;
const cardBorderColorSecondary = `#${light100}40`;

// typography
const typographyWhite = light100;
const typographyPrimary = dark75;
const typographySecondary = gray50;
const typographyOrange = orange75;
const typographyAccent = green75;

export interface IExtendPalette {
	light100: string;
	dark100: string;
	dark75: string;
	gray75: string;
	gray50: string;
	gray25: string;
	gray10: string;
	orange75: string;
	yellow75: string;
	aqua75: string;
	green75: string;
	//
	backgroundColorLight: string,
	backgroundColorBlack: string,
	backgroundMain: string;
	cardBorderColorPrimary: string;
	cardBorderColorSecondary: string;
}

export const extendPalette: IExtendPalette = {
	light100,
	dark100,
	dark75,
	gray75,
	gray50,
	gray25,
	gray10,
	orange75,
	yellow75,
	aqua75,
	green75,
	//
	backgroundColorLight,
	backgroundColorBlack,
	backgroundMain,
	cardBorderColorPrimary,
	cardBorderColorSecondary,
};

export interface ITypographyColors {
	white: string,
	primary: string,
	secondary: string,
	orange: string,
	accent: string,
}

export const typographyColors: ITypographyColors = {
	white: typographyWhite,
	primary: typographyPrimary,
	secondary: typographySecondary,
	orange: typographyOrange,
	accent: typographyAccent,
};

