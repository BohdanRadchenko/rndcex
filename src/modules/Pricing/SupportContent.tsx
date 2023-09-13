import { BorderGradient } from '@/componnents/BorderGradient';
import { supportCosts } from '@/modules/Pricing/content';
import { PriceShape } from '@/modules/Pricing/PriceShape';
import { Card, SupportBodyText, SupportSubtitle, SupportTitle } from '@/modules/Pricing/styled';
import { extendPalette } from '@/theme/extendPalette';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const SupportContent = memo(() => {
	return (
		<Card>
			<Stack spacing={3}>
				<SupportTitle>Support Costs</SupportTitle>
				<Stack
					spacing={1.6}
					direction="row"
				>
					{supportCosts.map(({ title, subtitle, price }) => (
						<Stack
							key={title}
							spacing={1.6}
							flexBasis="50%"
						>
							<BorderGradient
								color={extendPalette.green75}
								space={1.6}
							>
								<SupportSubtitle>{title}&#58;</SupportSubtitle>
							</BorderGradient>
							<SupportBodyText>{subtitle}</SupportBodyText>
							<PriceShape
								text={price}
								sx={{ fontSize: 30 }}
							/>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Card>
	);
});
