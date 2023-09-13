import { IContent } from '@/modules/Functionality/content';
import { FunctionalityContent } from '@/modules/Functionality/FunctionalityContent';
import { BackgroundHolderStyle, TitleStyled } from '@/modules/Functionality/styled';
import { Card, Stack } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

export interface IFunctionalityCardProps {
	title: string;
	content: IContent[];
	children: ReactElement;
}

export const FunctionalityCard: FC<IFunctionalityCardProps> = memo(({ title, content, children }) => {
	return (
		<Card sx={{ p: 5, flexGrow: 1, flexBasis: '50%', position: 'relative' }}>
			<BackgroundHolderStyle>
				{children}
			</BackgroundHolderStyle>
			<Stack spacing={3}>
				<Stack direction="row">
					<TitleStyled>
						{title}
					</TitleStyled>
				</Stack>
				<FunctionalityContent content={content}/>
			</Stack>
		</Card>
	);
});
