import { Typography, TypographyProps } from '@mui/material';
import { FC, memo } from 'react';

export const TypographyTitleWhite: FC<TypographyProps> = memo(({ children, sx, ...props }) => {
	return (
		<Typography
			{...props}
			variant="title"
			sx={({ palette: { typography } }) => ({
				color: typography.white,
				...sx
			})}
		>
			{children}
		</Typography>
	);
});
