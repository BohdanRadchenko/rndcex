import { ICheckboxProps } from '@/componnents/Checkbox/Checkbox';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckboxStyled = styled(MuiCheckbox)<ICheckboxProps>(({ lock }) => ({
	pointerEvents: lock ? 'none' : 'unset',
}));
