import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import { pricing } from '@/modules/Pricing/content';
import { PriceShape } from '@/modules/Pricing/PriceShape';
import { Card } from '@/modules/Pricing/styled';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const PricingContent = memo(() => {
	return (
		<Stack
			direction="row"
			gap={3}
		>
			{pricing.map(({ price, features }, index) => (
				<Card
					key={`${index}-${price}`}
				>
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
				</Card>
			))}
		</Stack>
	);
});
