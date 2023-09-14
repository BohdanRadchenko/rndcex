import { BorderGradient } from '@/componnents/BorderGradient';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { extendPalette } from '@/theme/extendPalette';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { BodyTitleStyle, ContainerStyled, SubtitleStyle } from './styled';

export const HeadSectionContent = memo(() => {
	return (
		<Stack
			justifyContent="space-between"
			alignItems="space-between"
			flex={1}
		>
			<ContainerStyled>
				<TypographyTitleWhite
					sx={{
						position: 'relative',
						display: 'block',
						fontSize: 110,
						maxWidth: 1190,
						top: -5
					}}
				>
					Top-notch
					Web3 Solutions and Services
				</TypographyTitleWhite>
			</ContainerStyled>

			<Stack
				width="100%"
				alignItems="flex-end"
			>
				<Stack
					boxSizing="content-box"
					sx={(theme) => ({
						boxSizing: 'content-box',
						padding: '0 5.468%',
						[theme.breakpoints.up('xl')]: {
							paddingRight: '5.468%',
							width: '53%',
							maxWidth: 1015,
							minWidth: 980,
						}
					})}
				>
					<Stack
						spacing={3}
					>
						<SubtitleStyle>
							R’N’D CEX is a Software Development Company&nbsp;&nbsp;&nbsp;
							and R&D Lab focusing on Web3 and FinTech market.
						</SubtitleStyle>
						<Stack spacing={1}>
							<BodyTitleStyle>
								With a track record spanning seven years, R’N’D CEX possesses extensive expertise in building crypto
								asset
								trading infrastructure.
							</BodyTitleStyle>
							<BodyTitleStyle>
								R’N’D CEX team is composed of more than 40 highly skilled developers, engineers, and blockchain
								architects
								who
								have worked together for an extended period, ensuring seamless collaboration and the successful delivery
								of
								FinTech solutions.
							</BodyTitleStyle>
						</Stack>
					</Stack>
				</Stack>
				<BorderGradient
					maxWidth={1120}
					width="58%"
					spacing={5}
					color={extendPalette.light100}
					angle={-90}
				/>
			</Stack>
		</Stack>
	)
		;
});
