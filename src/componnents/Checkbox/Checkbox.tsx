import { CheckboxStyled } from '@/componnents/Checkbox/styled';
import { ReactComponent as CheckboxIcon } from '@/icons/Checkbox.svg';
import { ReactComponent as CheckboxRectIcon } from '@/icons/CheckboxRect.svg';
import { CheckboxProps } from '@mui/material';
import { FC, memo } from 'react';

export interface ICheckboxProps extends CheckboxProps {
	lock?: boolean;
}

export const Checkbox: FC<ICheckboxProps> = memo(({ value, lock = false, ...props }) => {
	return (
		<CheckboxStyled
			icon={<CheckboxRectIcon/>}
			checkedIcon={<CheckboxIcon/>}
			checked={value}
			pointerEvents={lock ? 'none' : 'unset'}
			{...props}
		/>
	);
});
