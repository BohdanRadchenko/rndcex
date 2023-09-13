import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CardListStyled = styled(Box)(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	gap: theme.spacing(3),
}));
