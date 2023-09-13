import { Card } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

interface ICardListItemProps {
	children: ReactElement;
}

export const CardListItem: FC<ICardListItemProps> = memo(({ children }) => {
		return (
			<Card
				sx={{
					// flexShrink: 0,
					// flexGrow: 1,
					// flexBasis: 'min-content',
					// flex: '1 0 auto',
					// flex: 0,
					// flexGrow: 1,
					// width: 'auto'
					// flex: '1 2 min-content',
					minWidth: 'min-content',
					// minWidth: '305px',
					// flexGrow: 1,
					// flexBasis: 1,
					// flexShrink: 1,
				}}
			>
				{children}
			</Card>
		);
	}
);
