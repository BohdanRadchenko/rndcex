import { Typography, TypographyProps } from '@mui/material';
import { FC, memo } from 'react';

export const TypographyTitleAccent: FC<TypographyProps> = memo(({ children, sx, ...props }) => {
	return (
		<Typography
			{...props}
			variant="title"
			sx={({ palette: { typography } }) => ({
				width: '100%',
				color: typography.accent,
				...sx
			})}
		>
			{children}
		</Typography>
	);
});
