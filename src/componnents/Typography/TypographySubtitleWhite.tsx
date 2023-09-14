import { Typography, TypographyProps } from '@mui/material';
import { FC, memo } from 'react';

export const TypographySubtitleWhite: FC<TypographyProps> = memo(({ children, sx, ...props }) => {
	return (
		<Typography
			{...props}
			sx={({ palette: { typography } }) => ({
				color: typography.secondary,
				fontFamily: 'Peta',
				fontSize: 30,
				fontWeight: 400,
				...sx
			})}
		>
			{children}
		</Typography>
	);
});
