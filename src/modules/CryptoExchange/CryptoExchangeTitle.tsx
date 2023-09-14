import { TypographySubtitleWhite, TypographyTitleAccent, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const CryptoExchangeTitle = memo(() => {
	return (
		<Stack
			spacing={3}
			maxWidth={1420}
		>
			<TypographyTitleWhite>
				<TypographyTitleAccent>What is&nbsp;</TypographyTitleAccent>
				Whitelabel Crypto Exchange Software?
			</TypographyTitleWhite>
			<TypographySubtitleWhite>
				Whitelabel crypto exchange (CEX) software is a ready-made software that includes all the necessary systems,
				modules, and tools to start a crypto exchange business.
			</TypographySubtitleWhite>
		</Stack>
	);
});
