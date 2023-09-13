import { CardListItem } from '@/componnents/CardList/CardListItem';
import { CSSProperties, memo } from 'react';
import { CardListStyled } from './styled';

interface ICardListProps<L> {
	list: L[];
	children: (item: L, index: number, array: L[]) => JSX.Element;
	sx?: CSSProperties;
}

function ListComponent<L extends Record<'id', string | number>>({ list, children, sx = {} }: ICardListProps<L>) {
	return (
		<CardListStyled sx={{ ...sx }}>
			{list.map((item, index, array) => (
				<CardListItem key={index}>
					{children(item, index, array)}
				</CardListItem>
			))}
		</CardListStyled>
	);
}

export const CardList = memo(ListComponent);
