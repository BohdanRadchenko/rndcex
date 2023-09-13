import { TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { SubtitleStyled, TitleStyled } from './styled';

export const ManagementTitle = memo(() => {
	return (
		<Stack
			spacing={3}
			flexBasis="40%"
		>
			<Stack>
				<TitleStyled>Liquidity Management</TitleStyled>
				<TypographyTitleWhite>Solutions</TypographyTitleWhite>
			</Stack>
			<SubtitleStyled>
				With our Liquidity Management Solutions, your users can instantly convert crypto to fiat or fiat to
				crypto, increasing order flow and filling system for trades. Connect to other exchanges and liquidity providers
				APIs to create a robust liquidity pool and connect to even higher liquidity, all supported by comprehensive risk
				management and competitive yields.
			</SubtitleStyled>
		</Stack>
	);
});
