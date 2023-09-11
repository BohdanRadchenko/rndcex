import { LogoIcon } from '@/icons';
import * as React from 'react';
import { FC } from 'react';
import { LogoColor } from './types';

export interface ILogoProps {
	color?: LogoColor;
}

export const Logo: FC<ILogoProps> = ({ color = LogoColor.BLACK }) => {
	return (
		<>
			<LogoIcon/>
			{color}
		</>
	);
};
