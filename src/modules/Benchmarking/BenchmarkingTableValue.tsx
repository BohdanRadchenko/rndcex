import { Checkbox } from '@/componnents/Checkbox';
import { FC, memo } from 'react';
import { TableRowText } from './styled';

interface IBenchmarkingTableValueProps {
	value: string | boolean;
}

export const BenchmarkingTableValue: FC<IBenchmarkingTableValueProps> = memo(({ value }) => {
	return (
		<>
			{typeof value === 'boolean'
				? <Checkbox
					value={value}
					lock={true}
				/>
				: (<TableRowText>{value.toString()}</TableRowText>)
			}
		</>
	);
});
