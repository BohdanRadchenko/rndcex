import { BorderGradient } from '@/componnents/BorderGradient';
import { ListItem } from '@/componnents/ListItem';
import { Box, Stack, Typography } from '@mui/material';
import { FC, memo } from 'react';
import { IFunctionalityCardProps } from './FunctionalityCard';
import { ContentWrapper } from './styled';

interface IFunctionalityContentProps extends Pick<IFunctionalityCardProps, 'content'> {
}

export const FunctionalityContent: FC<IFunctionalityContentProps> = memo(({ content }) => {
	return (
		<Box>
			<ContentWrapper>
				{content.map(({ title, list }) => (
					<Stack
						spacing={1}
						key={title}
					>
						<BorderGradient>
							<Typography
								sx={{
									fontFamily: 'Zetta',
									fontSize: 30,
									textTransform: 'uppercase',
								}}
							>
								{title}&#58;
							</Typography>
						</BorderGradient>
						<Stack
							component="ul"
							spacing="4px"
						>
							{list.map((element) => (
								<ListItem
									key={element}
									component="li"
								>
									<Typography fontFamily="Peta">
										{element}
									</Typography>
								</ListItem>
							))}
						</Stack>
					</Stack>
				))}
			</ContentWrapper>
		</Box>
	);
});
