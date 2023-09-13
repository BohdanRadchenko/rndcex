import { CardBackground } from '@/componnents/CardBackground';
import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import { pricing } from '@/modules/Pricing/content';
import { PriceShape } from '@/modules/Pricing/PriceShape';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const PricingContent = memo(() => {
	return (
		<Stack
			direction="row"
			gap={3}
		>
			{pricing.map(({ price, features }) => (
				<CardBackground sx={{ flex: 1 }}>
					<Stack spacing={3}>
						<PriceShape text={price}/>
						<Stack spacing={3}>
							{features.map((feature) => (
								<CheckmarkItem
									key={feature}
									text={feature}
								/>
							))}
						</Stack>
					</Stack>
				</CardBackground>
			))}
		</Stack>
	);
});
