import { BackgroundPricingSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographySubtitleWhite, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { PricingContent } from './PricingContent';
import { SupportContent } from './SupportContent';

export const Pricing = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundPricingSection}
		>
			<Stack
				spacing={5}
				flexGrow={1}
				pt={8}
			>
				<Stack spacing={3}>
					<TypographyTitleWhite>
						Pricing
					</TypographyTitleWhite>
					<TypographySubtitleWhite>
						Price include complete transfer of the code base
					</TypographySubtitleWhite>
				</Stack>

				<Stack spacing={3}>
					<PricingContent/>
					<SupportContent/>
				</Stack>
			</Stack>
		</LayoutLogo>
	);
});
