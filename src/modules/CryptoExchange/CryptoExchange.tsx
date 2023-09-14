import { BackgroundCryptoExchangeSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { CryptoExchangeCard } from '@/modules/CryptoExchange/CryptoExchangeCard';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { CryptoExchangeTitle } from './CryptoExchangeTitle';

export const CryptoExchange = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundCryptoExchangeSection}
		>
			<Stack
				pt={10.4}
				pb={7.4}
				spacing={5}
				flexGrow={1}
			>
				<CryptoExchangeTitle/>
				<CryptoExchangeCard/>
			</Stack>
		</LayoutLogo>
	);
});
