// light
const light100 = '#ffffff';
const light90 = '#FBFBFB';

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

// brown
const brown75 = '#3E1D00';

// aqua
const aqua85 = '#003A33';
const aqua75 = '#004F45';

// green
const green75 = '#96FF00';

//style
const backgroundColorLight = gray10;
const backgroundColorBlack = dark100;
const backgroundMain = backgroundColorLight;

const cardBorderColorPrimary = gray75;
const cardBorderColorSecondary = `${light100}40`;

// typography
const typographyWhite = light100;
const typographyPrimary = dark75;
const typographySecondary = gray50;
const typographyOrange = orange75;
const typographyAccent = green75;

// checkbox
const checkboxChecked = green75;
const checkboxHover = aqua75;
const checkboxDisabled = brown75;
const checkboxUnchecked = orange75;

// table
const tableBackgroundOdd = '#FFFFFF12';
const tableBackgroundCurrent = '#FFFFFF26';

export interface IExtendPalette {
	//light
	light100: string;
	light90: string;
	//dark
	dark100: string;
	dark75: string;
	//gray
	gray75: string;
	gray50: string;
	gray25: string;
	gray10: string;
	// orange
	orange75: string;
	// yellow
	yellow75: string;
	//brown
	brown75: string;
	// aqua
	aqua85: string;
	aqua75: string;
	//green
	green75: string;
	//
	backgroundColorLight: string,
	backgroundColorBlack: string,
	backgroundMain: string;
	cardBorderColorPrimary: string;
	cardBorderColorSecondary: string;

	//
	checkboxChecked: string;
	checkboxHover: string;
	checkboxDisabled: string;
	checkboxUnchecked: string;

	//
	tableBackgroundOdd: string;
	tableBackgroundCurrent: string;
}

export const extendPalette: IExtendPalette = {
	//
	light100,
	light90,
	//
	dark100,
	dark75,
	//
	gray75,
	gray50,
	gray25,
	gray10,
	//
	orange75,
	//
	yellow75,
	//
	brown75,
	//
	aqua85,
	aqua75,
	//
	green75,
	//
	backgroundColorLight,
	backgroundColorBlack,
	backgroundMain,
	cardBorderColorPrimary,
	cardBorderColorSecondary,
	//
	checkboxChecked,
	checkboxHover,
	checkboxDisabled,
	checkboxUnchecked,
	//
	tableBackgroundOdd,
	tableBackgroundCurrent,
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

