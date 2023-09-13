import { ELayoutColorSchema, ILayoutProps } from '@/componnents/Layout';
import { FC, memo, ReactElement } from 'react';
import { ListItemStyled } from './styled';

export interface IListItemProps extends Pick<ILayoutProps, 'colorSchema'> {
	children: ReactElement;
}

export const ListItem: FC<IListItemProps> = memo(({ children, colorSchema = ELayoutColorSchema.LIGHT }) => {
	return (
		<ListItemStyled colorSchema={colorSchema}>
			{children}
		</ListItemStyled>
	);
});
