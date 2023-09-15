import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles';

export const muiCheckbox: Components<Theme>['MuiCheckbox'] = {
	styleOverrides: {
		root: ({ theme: _theme }) => ({
			width: 24,
			height: 24,
			flexShrink: 0,
			padding: 0,
			margin: 10,
			color: _theme.extendPalette.checkboxUnchecked,
			'&:hover': {
				color: _theme.extendPalette.checkboxUnchecked,
			},
			'&.Mui-checked': {
				color: _theme.extendPalette.checkboxChecked,
				'&:hover': {
					color: _theme.extendPalette.checkboxChecked,
				},
				'&:focus': {
					outline: `3px solid ${_theme.extendPalette.checkboxDisabled}`,
				},
				'&.Mui-disabled': {
					color: _theme.extendPalette.checkboxDisabled,
				},
			},
		}),
	},
};
