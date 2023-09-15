import { Stack } from '@mui/material';
import { memo } from 'react';
import { BenchmarkingTable } from './BenchmarkingTable';
import { benchmarkingData } from './content';
import { Title } from './styled';

export const BenchmarkingContent = memo(() => {
	return (
		<Stack spacing={5}>
			{benchmarkingData.map(({ title, values }) => (
				<Stack
					spacing={3}
					key={title}
				>
					<Title>{title}</Title>
					<BenchmarkingTable values={values}/>
				</Stack>
			))}
		</Stack>
	);
});
