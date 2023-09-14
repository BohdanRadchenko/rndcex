import { TypographySubtitleWhite, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const SolutionServicesTitle = memo(() => {
	return (
		<Stack
			spacing={3}
			maxWidth={1420}
		>
			<TypographyTitleWhite>Solutions & Services</TypographyTitleWhite>
			<TypographySubtitleWhite>
				We offer a comprehensive range of Web3 solutions development and consulting services to help businesses harness
				the power of blockchain technology
			</TypographySubtitleWhite>
		</Stack>
	);
});
