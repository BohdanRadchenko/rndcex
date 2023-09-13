import { Box, Stack, StackProps, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TitleStyled = styled(MuiTypography)(({ theme }) => ({
	position: 'relative',
	fontSize: 26,
	backgroundColor: theme.extendPalette.green75,
	padding: theme.spacing(1.6, 3),
	borderRadius: 10,
}));

export const ContentWrapper = styled('div')({
	display: 'grid',
	gridRowGap: 20,
	gridColumnGap: 50,
	gridTemplateColumns: 'repeat(2, 1fr)',
});

export const ListItem = styled(Box)(({ theme }) => ({
	paddingLeft: 26,
	position: 'relative',
	'&::before': {
		content: '" "',
		display: 'block',
		width: 3,
		height: 3,
		backgroundColor: theme.extendPalette.dark75,
		position: 'absolute',
		top: '50%',
		left: '14px',
		transform: 'translate(-50%, -50%)'
	}
}));

export const BackgroundHolderStyle = styled(Box)({
	position: 'absolute',
	right: 0,
	bottom: 0,
	left: 0,
	paddingRight: 50,
});

export const BackgroundImageWrapperStyle = styled(
	({ ...props }: StackProps) => <Stack
		{...props}
		direction="row"
		spacing="28px"
	/>
)({
	justifyContent: 'flex-end',
	alignItems: 'flex-end',
	'& img': {
		objectFit: 'none',
	}
});

