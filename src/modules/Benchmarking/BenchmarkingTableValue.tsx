import { Checkbox } from '@/componnents/Checkbox';
import { Stack } from '@mui/material';
import { FC, memo } from 'react';
import { getIconFromCompanyName } from './helpers';
import { TableRowText } from './styled';

interface IBenchmarkingTableValueProps {
	value: string | boolean;
	renderKey: string;
}

export const BenchmarkingTableValue: FC<IBenchmarkingTableValueProps> = memo(({ value, renderKey }) => {
	const isCompanyKey = renderKey === 'company';
	const isCheckboxValue = typeof value === 'boolean';

	if (isCompanyKey) {
		const Icon = getIconFromCompanyName(value);
		return (
			<Stack
				direction="row"
				spacing={1}
				justifyContent="center"
				alignItems="center"
			>
				<Icon/>
				<TableRowText>{value}</TableRowText>
			</Stack>
		);

	}
	return (
		<>
			{isCheckboxValue
				? <Checkbox
					value={value}
					lock={true}
				/>
				: (<TableRowText>{value}</TableRowText>)
			}
		</>
	);
});
