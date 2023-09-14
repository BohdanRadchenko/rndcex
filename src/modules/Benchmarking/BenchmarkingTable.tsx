import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC, memo } from 'react';
import { IBenchmarkingData } from './content';
import { tableHead } from './helpers';
import { Card, TableCellTitle } from './styled';

interface IBenchmarkingTableProps extends Pick<IBenchmarkingData, 'values'> {
}

export const BenchmarkingTable: FC<IBenchmarkingTableProps> = memo(({ values }) => {
	return (
		<TableContainer component={Card}>
			<Table
				// sx={{ minWidth: 650 }}
			>
				<TableHead>
					<TableRow>
						{tableHead(values).map(({ label }) => (
							<TableCellTitle align="right">{label}</TableCellTitle>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow
						key={'row.name'}
						sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
					>
						<TableCell
							component="th"
							scope="row"
						>
							row.name
						</TableCell>
						<TableCell align="center">row.calories</TableCell>
						<TableCell align="center">row.fat</TableCell>
						<TableCell align="center">row.carbs</TableCell>
						<TableCell align="center">row.protein</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
});
