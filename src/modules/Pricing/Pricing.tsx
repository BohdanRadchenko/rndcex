import { BackgroundPricingSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { HeadSubtitleText, HeadTitleText } from '@/modules/Pricing/styled';
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
					<HeadTitleText>
						Pricing
					</HeadTitleText>
					<HeadSubtitleText>
						Price include complete transfer of the code base
					</HeadSubtitleText>
				</Stack>

				<Stack spacing={3}>
					<PricingContent/>
					<SupportContent/>
				</Stack>
			</Stack>
		</LayoutLogo>
	);
});
