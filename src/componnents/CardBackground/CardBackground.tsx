import { CardBackgroundStyled } from '@/componnents/CardBackground/styled';
import { CardProps } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

interface ICardBackgroundProps extends CardProps {
	children: ReactElement;
}

export const CardBackground: FC<ICardBackgroundProps> = memo(({ children, ...props }) => {
	return (
		<CardBackgroundStyled {...props}>
			{children}
		</CardBackgroundStyled>
	);
});
