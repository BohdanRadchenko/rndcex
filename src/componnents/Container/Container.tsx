import * as React from 'react';
import { FC } from 'react';
import { ContainerStyled } from './styled';

interface IContainerProps {
	children: JSX.Element;
}

export const Container: FC<IContainerProps> = ({ children }) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
};
