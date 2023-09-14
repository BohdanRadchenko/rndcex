import { BackgroundSecuritySection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographySubtitleWhite, TypographyTitleAccent, TypographyTitleWhite } from '@/componnents/Typography';
import { SecurityContent } from '@/modules/Security/SecurityContent';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const Security = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundSecuritySection}
		>
			<Stack
				spacing={5}
				flexGrow={1}
				pt={15.2}
				pb={12.2}
			>
				<Stack
					spacing={3}
					maxWidth={1420}
				>
					<TypographyTitleWhite>
						<TypographyTitleAccent>Security&nbsp;</TypographyTitleAccent>
						Features
					</TypographyTitleWhite>
					<TypographySubtitleWhite>
						At RND CEX, we prioritize providing all the necessary tools for verifying and monitoring users to ensure
						your security, and the security of your clients' digital assets.
					</TypographySubtitleWhite>
				</Stack>
				<SecurityContent/>
			</Stack>
		</LayoutLogo>
	);
});
