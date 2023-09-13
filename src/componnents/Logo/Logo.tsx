import { ReactComponent as LogoIcon } from '@/icons/Logo.svg';
import { FC, memo } from 'react';
import { ELogoColorSchema } from './types';

export interface ILogoProps {
	colorSchema?: ELogoColorSchema;
}

const getColorByType = (colorSchema: ELogoColorSchema) => {
	switch (colorSchema) {
		case ELogoColorSchema.LIGHT:
			return '#181818';
		case ELogoColorSchema.DARK:
			return '#fff';
		default:
			return '#000';
	}
};

export const Logo: FC<ILogoProps> = memo(({ colorSchema = ELogoColorSchema.LIGHT }) => {
	return (
		<LogoIcon fill={getColorByType(colorSchema)}/>
	);
});
