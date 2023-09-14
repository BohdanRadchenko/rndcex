import { ELayoutColorSchema, ILayoutProps } from '@/componnents/Layout';
import { ReactComponent as LogoIcon } from '@/icons/Logo.svg';
import { ReactComponent as LogoColorIcon } from '@/icons/LogoColor.svg';
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
			return 'inherit';
	}
};

export const Logo: FC<ILogoProps> = memo(({ colorSchema = ELayoutColorSchema.LIGHT }) => {
	const Logo = colorSchema === ELayoutColorSchema.COLOR ? LogoColorIcon : LogoIcon;
	return (
		<Logo fill={getColorByType(colorSchema)}/>
	);
});
