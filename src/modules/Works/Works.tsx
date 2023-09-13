import { BackgroundWorkSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { WorksContent } from '@/modules/Works/WorksContent';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const Works = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundWorkSection}
		>
			<Stack
				spacing={5}
				flexGrow={1}
				pt={8}
				pb={5}
			>
				<TypographyTitleWhite>How we work?</TypographyTitleWhite>
				<WorksContent/>
			</Stack>
		</LayoutLogo>
	);
});
