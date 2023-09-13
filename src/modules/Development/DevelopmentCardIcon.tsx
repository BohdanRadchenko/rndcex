import { Stack, Typography } from '@mui/material';
import { FC, memo, ReactElement } from 'react';

export interface IDevelopmentCardIconProps {
	name: string;
	icon: ReactElement;
}

export const DevelopmentCardIcon: FC<IDevelopmentCardIconProps> = memo(({ name, icon: Icon }) => {
	return (
		<Stack
			key={name}
			spacing="5px"
			sx={(theme) => ({
				alignItems: 'center',
				minWidth: theme.spacing(8),
			})}
		>
			<Icon/>
			<Typography
				variant="body2"
				noWrap
				component="pre"
			>
				{name}
			</Typography>
		</Stack>
	);
});
