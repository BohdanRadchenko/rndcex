import { CardList } from '@/componnents/CardList';
import { LayoutLogo } from '@/componnents/Layout';
import { DevelopmentCardIcon } from '@/modules/Development/DevelopmentCardIcon';
import { integrationsList } from '@/modules/Integrations/mock';
import { Stack, Typography } from '@mui/material';

export const Integrations = () => {
	return (
		<LayoutLogo>
			<Typography
				variant="title"
				sx={{ mb: 3 }}
			>
				Integrations We Can Offer
			</Typography>
			<Typography
				variant="subtitle"
				sx={{ mb: 5 }}
			>
				Our CEX solution comes with an extensive list of 3rd-party integrations we can implement on-demand, to
				streamline your business processes and provide advanced functionality for users
			</Typography>
			<CardList list={integrationsList}>
				{({ title, icons }) => {
					return (
						<Stack spacing={3}>
							<Typography
								variant="body1"
								align="center"
								component="pre"
							>
								{title}
							</Typography>
							<Stack
								direction="row"
								gap={3}
								alignItems="center"
								justifyContent="center"
							>
								{icons.map(({ name, icon }, index) => (
									<DevelopmentCardIcon
										key={`${index}-${name}`}
										name={name}
										icon={icon}
									/>
								))}
							</Stack>
						</Stack>
					);
				}}
			</CardList>
		</LayoutLogo>
	);
};
