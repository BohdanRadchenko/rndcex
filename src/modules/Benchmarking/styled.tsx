import { CardBackground } from '@/componnents/CardBackground';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { TableCell as MuiTableCell, Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Card = styled(CardBackground)(({ theme: { extendPalette } }) => ({
	padding: 0,
	width: '100%',
	backgroundImage:
		`radial-gradient(circle at 89%, ${extendPalette.brown75}59 0%, ${extendPalette.dark75}59 100%)`,
}));

export const Title = styled(TypographyTitleWhite)({
	fontSize: 46,
});

export const TableCellHead = styled(MuiTableCell)(({ theme: { spacing, extendPalette } }) => ({
	padding: spacing(2.2, 1.5),
	fontSize: 18,
	fontFamily: 'Zetta',
	color: extendPalette.light100,
	textTransform: 'uppercase',
	'&:nth-child(odd)': {
		backgroundColor: `${extendPalette.light100}12`,
	}
}));

export const TableCellRow = styled(TableCellHead)({
	fontFamily: 'Peta',
	textTransform: 'unset',
});

export const TableRowText = styled((props: TypographyProps) =>
	<Typography {...props} variant="body1"/>)(({ theme: { palette: { typography } } }) => ({
	color: typography.white,
}));
