import { ELayoutColorSchema } from '@/componnents/Layout';
import { LayoutStyled } from '@/componnents/Layout/styled';
import { FC, memo, ReactElement } from 'react';

export interface ILayoutProps {
	children?: ReactElement | ReactElement[];
	colorSchema?: ELayoutColorSchema;
	backgroundComponent?: ReactElement;
}

export const Layout: FC<ILayoutProps> = memo(({
																								children,
																								backgroundComponent: BackgroundComponent = null,
																								colorSchema = ELayoutColorSchema.LIGHT
																							}) => {
	return (
		<LayoutStyled colorSchema={colorSchema}>
			{!!BackgroundComponent && <BackgroundComponent/>}
			{children}
		</LayoutStyled>
	);
});
