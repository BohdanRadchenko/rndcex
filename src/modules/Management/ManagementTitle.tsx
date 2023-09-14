import { TypographySubtitleWhite, TypographyTitleAccent, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const ManagementTitle = memo(() => {
	return (
		<Stack
			spacing={3}
			flexBasis="40%"
		>
			<Stack>
				<TypographyTitleAccent>Liquidity Management</TypographyTitleAccent>
				<TypographyTitleWhite>Solutions</TypographyTitleWhite>
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
