import { BackgroundProductsSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { ManagementCard } from './ManagementCard';
import { ManagementTitle } from './ManagementTitle';

export const Management = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundProductsSection}
		>
			<Stack
				flexGrow={1}
				pt={8}
				pb={5}
				direction="row"
			>
				<Stack
					direction={{ xs: 'column', xl: 'row' }}
					spacing={5}
				>
					<ManagementTitle/>
					<ManagementCard/>
				</Stack>
			</Stack>
		</LayoutLogo>
	);
});
