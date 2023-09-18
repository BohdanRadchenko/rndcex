import { TypographySubtitleWhite, TypographyTitleAccent, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const ManagementTitle = memo(() => {
	return (
		<Stack
			spacing={3}
			sx={{
				maxWidth: { xs: '100%', xl: '40%' },
				minWidth: { xs: '100%', xl: '680px' }
			}}
		>
			<Stack>
				<TypographyTitleWhite>
					<TypographyTitleAccent sx={{ display: 'inline-flex' }}>Liquidity Management&nbsp;</TypographyTitleAccent>
					Solutions
				</TypographyTitleWhite>
			</Stack>
			<TypographySubtitleWhite>
				With our Liquidity Management Solutions, your users can instantly convert crypto to fiat or fiat to
				crypto, increasing order flow and filling system for trades. Connect to other exchanges and liquidity providers
				APIs to create a robust liquidity pool and connect to even higher liquidity, all supported by comprehensive risk
				management and competitive yields.
			</TypographySubtitleWhite>
		</Stack>
	);
});
