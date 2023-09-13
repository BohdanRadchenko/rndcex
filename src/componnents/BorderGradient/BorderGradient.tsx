import { BorderGradientStyle } from '@/componnents/BorderGradient/styled';
import { extendPalette } from '@/theme/extendPalette';
import { FC, memo, ReactElement } from 'react';

export interface IBorderGradientProps {
	children: ReactElement;
	color?: [keyof typeof extendPalette],
	space?: number;
}

export const BorderGradient: FC<IBorderGradientProps> = memo(({
																																children,
																																color = extendPalette.orange75,
																																space = 1
																															}) => {
	return (
		<BorderGradientStyle
			gradient={color}
			space={space}
		>
			{children}
		</BorderGradientStyle>
	);
});
