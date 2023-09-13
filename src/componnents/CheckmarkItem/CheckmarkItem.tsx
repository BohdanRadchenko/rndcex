import { CheckmarkText } from '@/componnents/CheckmarkItem/styled';
import { ReactComponent as CheckmarkIcon } from '@/icons/Checkmark.svg';
import { Stack, TypographyProps } from '@mui/material';
import { FC, memo } from 'react';

interface ICheckmarkItemProps extends TypographyProps {
	spacing?: number;
	text: string;
}

export const CheckmarkItem: FC<ICheckmarkItemProps> = memo(({ spacing = 1.6, text, ...props }) => {
	return (
		<Stack
			spacing={spacing}
			direction="row"
		>
			<CheckmarkIcon/>
			<CheckmarkText {...props}>
				{text}
			</CheckmarkText>
		</Stack>
	);
});
