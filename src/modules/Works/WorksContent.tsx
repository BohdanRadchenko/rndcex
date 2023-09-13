import { CheckmarkItem } from '@/componnents/CheckmarkItem';
import { worksContentData } from '@/modules/Works/content';
import { BackgroundImageStyled, Card, CardTitleStyled } from '@/modules/Works/styled';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const WorksContent = memo(() => {
	return (
		<Stack
			spacing={3}
			direction="row"
			flexGrow={1}
		>
			{worksContentData.map(({ title, img, features }) => (
				<Card key={title}>
					<Stack spacing={3}>
						<CardTitleStyled>
							{title}
						</CardTitleStyled>
						<Stack spacing={3}>
							{features.map((item) => (
								<CheckmarkItem
									key={item}
									text={item}
								/>
							))}
						</Stack>
					</Stack>
					{/*TODO: move to background image */}
					<BackgroundImageStyled
						src={img}
						alt={title}
					/>
				</Card>
			))}
		</Stack>
	);
});
