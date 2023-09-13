import { BorderGradient } from '@/componnents/BorderGradient';
import { CardBackground } from '@/componnents/CardBackground';
import snap14 from '@/images/snap14.png';
import { CardDataSubtitleStyled, CardDataTitleStyled, CardTitleStyled } from '@/modules/Management/styled';
import { BackgroundImageStyled } from '@/modules/Works/styled';
import { extendPalette } from '@/theme/extendPalette';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { managersData } from './content';

export const ManagementCard = memo(() => {
	return (
		<CardBackground>
			<Stack spacing={3}>
				<CardTitleStyled>What We Offer</CardTitleStyled>
				<Stack
					gap={5}
					direction="row"
					// flexWrap="wrap"
				>
					{managersData.map(({ title, subtitle }) => (
						<Stack
							key={title}
							spacing={1.6}
							flexGrow={1}
							// flexBasis="47%"
						>
							<BorderGradient
								color={extendPalette.green75}
								space={1.6}
							>
								<CardDataTitleStyled>{title}&#58;</CardDataTitleStyled>
							</BorderGradient>
							<CardDataSubtitleStyled>
								{subtitle}
							</CardDataSubtitleStyled>
						</Stack>
					))}
				</Stack>
				{/*TODO: move to background image */}
				<BackgroundImageStyled
					src={snap14}
					alt={''}
				/>
			</Stack>
		</CardBackground>
	);
});
