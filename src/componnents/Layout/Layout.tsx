import { ELayoutColorSchema } from '@/componnents/Layout';
import { LayoutStyled } from '@/componnents/Layout/styled';
import { FC, memo, ReactElement } from 'react';
import { BackgroundBaseLight } from './backgrounds';

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
	const Background = !BackgroundComponent && colorSchema === ELayoutColorSchema.LIGHT
		? BackgroundBaseLight
		: BackgroundComponent;

	return (
		<LayoutStyled colorSchema={colorSchema}>
			{!!Background && <Background/>}
			{children}
		</LayoutStyled>
	);
});
