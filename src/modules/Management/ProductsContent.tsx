import { BorderGradient } from '@/componnents/BorderGradient';
import { ELayoutColorSchema } from '@/componnents/Layout';
import { ListItem } from '@/componnents/ListItem';
import snap15 from '@/images/snap15.png';
import { productContentData } from '@/modules/Products/content';
import { BackgroundImageStyled } from '@/modules/Works/styled';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { Card, CardSubtitleStyled, CardTitleStyled } from './styled';

export const ProductsContent = memo(() => {
	return (
		<Card>
			<Stack
				flexWrap="wrap"
				direction="row"
				width="78.92%"
				justifyContent="space-between"
				gap={5}
			>
				{productContentData.map(({ title, subtitle, features }) => (
					<Stack
						flexBasis="48%"
						spacing={1.6}
						key={title}
					>
						<BorderGradient space={1.6}>
							<CardTitleStyled>
								{title}
							</CardTitleStyled>
						</BorderGradient>
						<CardSubtitleStyled>{subtitle}</CardSubtitleStyled>
						<Stack spacing={1}>
							{features.map((item) => (
								<ListItem
									key={item}
									colorSchema={ELayoutColorSchema.DARK}
								>
									<CardSubtitleStyled>
										{item}
									</CardSubtitleStyled>
								</ListItem>
							))}
						</Stack>
					</Stack>
				))}
			</Stack>

			{/*TODO: move to background image */}
			<BackgroundImageStyled
				src={snap15}
				alt={''}
			/>
		</Card>
	);
});
