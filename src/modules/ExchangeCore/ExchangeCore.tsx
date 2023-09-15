import { LayoutLogo } from '@/componnents/Layout';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { BackgroundStyled } from './styled';

export const ExchangeCore = memo(() => {
	return (
		<LayoutLogo>
			<Stack
				pt={9.4}
				pb={6.5}
				spacing={5}
				flexGrow={1}
			>
				<Typography
					variant="title2"
				>
					RND CEX&nbsp;
					<Typography
						variant="title2"
						component="span"
						sx={({ palette: { typography } }) => ({ fontSize: 46, color: typography.orange })}
					>
						Exchange Core
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
