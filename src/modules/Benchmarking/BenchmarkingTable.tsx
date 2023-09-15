import { BenchmarkingTableValue } from '@/modules/Benchmarking/BenchmarkingTableValue';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { FC, memo } from 'react';
import { IBenchmarkingData } from './content';
import { createTableHead } from './helpers';
import { Card, TableCellHead, TableCellRow, TableRow } from './styled';

interface IBenchmarkingTableProps extends Pick<IBenchmarkingData, 'values'> {
}

export const BenchmarkingTable: FC<IBenchmarkingTableProps> = memo(({ values }) => {
	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableRow>
						{createTableHead(values).map(({ label }) => (
							<TableCellHead
								align="center"
								key={label}
							>{label}</TableCellHead>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{values.map((row) => (
						<TableRow
							key={row.id}
							highlight={!!row.current}
						>
							{createTableHead(values).map(({ key }) => (
								<TableCellRow
									align="center"
									key={key}
								>
									<BenchmarkingTableValue
										value={row[key]}
										renderKey={key}
									/>
								</TableCellRow>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	)
		;
});
