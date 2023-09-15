import { BackgroundChooseSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographyTitleAccent, TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { BackgroundStyled } from './styled';

export const ChooseSection = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundChooseSection}
		>
			<BackgroundStyled/>
			<Stack
				pt={8}
				flexGrow={1}
			>
				<TypographyTitleWhite>
					<TypographyTitleAccent component="span">
						Why Choose&nbsp;
					</TypographyTitleAccent>
					R’N’D CEX
				</TypographyTitleWhite>
			</Stack>
		</LayoutLogo>
	);
});
