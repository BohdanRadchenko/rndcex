import { solutionServiceData } from '@/modules/SolutionServices/content';
import { SolutionServicesCard } from '@/modules/SolutionServices/SolutionServicesCard';
import { Stack } from '@mui/material';
import { memo } from 'react';

export const SolutionServicesContent = memo(() => {
	return (
		<Stack
			direction="row"
			spacing={3}
		>
			{solutionServiceData.map((card) => (
				<SolutionServicesCard
					key={card.title}
					card={card}
				/>
			))}
		</Stack>
	);
});
