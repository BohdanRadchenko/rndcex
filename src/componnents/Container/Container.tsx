import { FC, memo } from 'react';
import { ContainerStyled } from './styled';

interface IContainerProps {
	children: JSX.Element;
}

export const Container: FC<IContainerProps> = memo(({ children }) => {
	return (
		<ContainerStyled>
			{children}
		</ContainerStyled>
	);
});
