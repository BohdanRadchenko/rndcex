import { BackgroundAdminPanelSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { BackgroundStyled } from './styled';

export const AdminPanel = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundAdminPanelSection}
		>
			<BackgroundStyled/>
			<Stack
				pt={8}
				flexGrow={1}
			>
				<TypographyTitleWhite>
					Admin Panel
				</TypographyTitleWhite>
			</Stack>
		</LayoutLogo>
	);
});
