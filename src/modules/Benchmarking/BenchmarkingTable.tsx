import { BenchmarkingTableValue } from '@/modules/Benchmarking/BenchmarkingTableValue';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC, memo } from 'react';
import { IBenchmarkingData } from './content';
import { createTableHead } from './helpers';
import { Card, TableCellHead, TableCellRow } from './styled';

interface IBenchmarkingTableProps extends Pick<IBenchmarkingData, 'values'> {
}

export const BenchmarkingTable: FC<IBenchmarkingTableProps> = memo(({ values }) => {
	return (
		<TableContainer component={Card}>
			<Table>
				<TableHead>
					<TableRow>
						{createTableHead(values).map(({ label }) => (
							<TableCellHead align="center">{label}</TableCellHead>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{values.map((row) => (
						<TableRow
							key={row.id}
							sx={{
								['&:last-child td, &:last-child th']: { border: 0 },
								['& > td:first-child p']: {
									fontSize: 24,
									fontFamily: 'Peta',
								}
							}}
						>
							{createTableHead(values).map(({ key }) => (
								<TableCellRow align="center">
									<BenchmarkingTableValue value={row[key]}/>
								</TableCellRow>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
});
