import { BaseBackground, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { BenchmarkingContent } from './BenchmarkingContent';

export const Benchmarking = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BaseBackground}
		>
			<Stack
				pt={8}
				pb={5}
				flex={1}
			>
				<BenchmarkingContent/>
			</Stack>
		</LayoutLogo>
	);
});
