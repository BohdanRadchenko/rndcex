import { Checkbox as MuiCheckbox } from '@mui/material';
import { styled } from '@mui/material/styles';

interface ICheckboxStyledProps {
	pointerEvents: string;
}

export const CheckboxStyled = styled(MuiCheckbox)<ICheckboxStyledProps>(({ pointerEvents }) => ({
	pointerEvents,
}));
