import { BackgroundManagementSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { ManagementCard } from './ManagementCard';
import { ManagementTitle } from './ManagementTitle';

export const Management = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundManagementSection}
		>
			<Stack
				spacing={5}
				flexGrow={1}
				pt={8}
				pb={5}
				direction="row"
			>
				<ManagementTitle/>
				<ManagementCard/>
			</Stack>
		</LayoutLogo>
	);
});
