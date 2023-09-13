import { ELayoutColorSchema, ILayoutProps } from '@/componnents/Layout';
import { ReactComponent as LogoIcon } from '@/icons/Logo.svg';
import { FC, memo } from 'react';

export interface ILogoProps extends Pick<ILayoutProps, 'colorSchema'> {
}

const getColorByType = (colorSchema: ELayoutColorSchema) => {
	switch (colorSchema) {
		case ELayoutColorSchema.LIGHT:
			return '#181818';
		case ELayoutColorSchema.DARK:
			return '#fff';
		default:
			return '#000';
	}
};

export const Logo: FC<ILogoProps> = memo(({ colorSchema = ELayoutColorSchema.LIGHT }) => {
	return (
		<LogoIcon fill={getColorByType(colorSchema)}/>
	);
});
