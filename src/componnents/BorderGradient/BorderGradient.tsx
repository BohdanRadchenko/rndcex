import { BorderGradientStyle } from '@/componnents/BorderGradient/styled';
import { extendPalette } from '@/theme/extendPalette';
import { BoxProps } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

export interface IBorderGradientProps extends BoxProps {
	children?: ReactElement;
	color?: [keyof typeof extendPalette],
	spacing?: number;
	angle?: number
}

export const BorderGradient: FC<IBorderGradientProps> = memo(({
																																children,
																																color = extendPalette.orange75,
																																spacing = 1,
																																angle = 90,
																																...props
																															}) => {
	return (
		<BorderGradientStyle
			{...props}
			gradient={color}
			space={spacing}
			angle={angle}
		>
			{children}
		</BorderGradientStyle>
	);
});
