import { ELayoutColorSchema } from '@/componnents/Layout';
import { IListItemProps } from '@/componnents/ListItem/ListItem';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IListItemStyledProps extends Pick<IListItemProps, 'colorSchema'> {
}

export const ListItemStyled = styled(Box)<IListItemStyledProps>(({ colorSchema, theme: { extendPalette } }) => ({
	paddingLeft: 26,
	position: 'relative',
	'&::before': {
		content: '" "',
		display: 'block',
		width: 3,
		height: 3,
		backgroundColor: colorSchema === ELayoutColorSchema.LIGHT ? extendPalette.dark75 : extendPalette.light100,
		position: 'absolute',
		top: '50%',
		left: '14px',
		transform: 'translate(-50%, -50%)'
	}
}));
