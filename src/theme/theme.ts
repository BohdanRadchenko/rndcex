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
		subtitle: CSSProperties;
		body1: CSSProperties;
		body2: CSSProperties;
	}

	interface TypographyVariantsOptions {
		title?: CSSProperties;
		subtitle?: CSSProperties;
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
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		title: true;
		subtitle: true;
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
		}
	},
	spacing: (factor: number) => `${10 * factor}px`,
	typography: {
		fontFamily: 'Tera',
		title: {
			fontFamily: 'Tera',
			fontSize: 80,
			fontWeight: 700,
		},
		subtitle: {
			fontFamily: 'Peta',
			fontSize: 30,
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
} as ThemeOptions);

export { theme };
