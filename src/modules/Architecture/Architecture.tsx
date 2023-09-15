import { LayoutLogo } from '@/componnents/Layout';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { BackgroundStyled } from './styled';

export const Architecture = memo(() => {
	return (
		<LayoutLogo>
			<Stack
				pt={11.3}
				pb={8.3}
				flexGrow={1}
				spacing={5}
			>
				<Typography
					variant="title2"
				>
					RNDCEX&nbsp;
					<Typography
						variant="title2"
						component="span"
						sx={({ palette: { typography } }) => ({ fontSize: 46, color: typography.orange })}
					>
						Architecture
					</Typography>
				</Typography>
				<Stack
					position="relative"
					flex={1}
				>
					<BackgroundStyled/>
				</Stack>
			</Stack>
		</LayoutLogo>
	);
});
