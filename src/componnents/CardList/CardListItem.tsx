import { Card } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

interface ICardListItemProps {
	children: ReactElement;
}

export const CardListItem: FC<ICardListItemProps> = memo(({ children }) => {
		return (
			<Card
				sx={{
					p: { xs: 2, lg: 3 },
					flex: '1 1 auto',
					minWidth: 'min-content',
				}}
			>
				{children}
			</Card>
		);
	}
);
