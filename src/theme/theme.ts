import { muiCheckbox } from '@/theme/muiCheckbox';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { CSSProperties } from 'react';
import { extendPalette, IExtendPalette, ITypographyColors, typographyColors } from './extendPalette';

const { cardBorderColorPrimary } = extendPalette;

declare module '@mui/material/styles/createTheme' {
	interface Theme {
		extendPalette: Partial<IExtendPalette>;
	}

	interface ThemeOptions {
		extendPalette: Partial<IExtendPalette>;
	}

	interface DeprecatedThemeOptions {
		extendPalette: Partial<IExtendPalette>;
	}
}

declare module '@mui/material/styles' {
	interface TypographyVariants {
		title: CSSProperties;
		title2: CSSProperties;
		subtitle: CSSProperties;
		subtitle2: CSSProperties;
		body1: CSSProperties;
		body2: CSSProperties;
	}

	interface TypographyVariantsOptions {
		title?: CSSProperties;
		title2?: CSSProperties;
		subtitle?: CSSProperties;
		subtitle2?: CSSProperties;
		body1?: CSSProperties;
		body2?: CSSProperties;
	}

	interface Palette {
		typography: Partial<ITypographyColors>;
	}

	interface PaletteOptions {
		typography: Partial<ITypographyColors>;
	}

	interface PaletteColor {
		typography: Partial<ITypographyColors>;
	}

	interface SimplePaletteColorOptions {
		typography?: Partial<ITypographyColors>;
	}

	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		xl: true;
		xxl: true;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		title: true;
		title2: true;
		subtitle: true;
		subtitle2: true;
		body1: true;
		body2: true;
	}
}

const theme = createTheme({
	extendPalette,
	palette: {
		...extendPalette,
		typography: typographyColors,
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					border: `1px solid ${cardBorderColorPrimary}`,
					borderRadius: '30px',
					padding: 30,
					boxShadow: 'unset',
				}
			}
		},
		MuiTypography: {
			defaultProps: {
				lineHeight: 1.2,
				variant: 'body1',
				color: typographyColors.primary,
			},
		},
		MuiCheckbox: muiCheckbox,
	},
	spacing: (factor: number) => `${10 * factor}px`,
	typography: {
		fontFamily: 'Tera',
		title: {
			fontFamily: 'Tera',
			fontSize: 80,
			fontWeight: 700
		},
		title2: {
			fontFamily: 'Tera',
			fontSize: 46,
			fontWeight: 700,
		},
		subtitle: {
			fontFamily: 'Peta',
			fontSize: 30,
			fontWeight: 400,
		},
		subtitle2: {
			fontFamily: 'Tera',
			fontSize: 26,
			fontWeight: 400,
		},
		body1: {
			fontFamily: 'Tera',
			fontSize: 18,
			fontWeight: 400,
		},
		body2: {
			fontFamily: 'Peta',
			fontSize: 18,
			fontWeight: 400,
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
			xxl: 1920,
		},
	},
} as ThemeOptions);

export { theme };
