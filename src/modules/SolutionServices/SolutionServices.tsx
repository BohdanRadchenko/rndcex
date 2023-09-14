import { BackgroundSolutionServicesSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { SolutionServicesContent } from './SolutionServicesContent';
import { SolutionServicesTitle } from './SolutionServicesTitle';

export const SolutionServices = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundSolutionServicesSection}
		>
			<Stack
				pt={11.4}
				pb={8.5}
				spacing={5}
				flexGrow={1}
			>
				<SolutionServicesTitle/>
				<SolutionServicesContent/>
			</Stack>
		</LayoutLogo>
	);
});
