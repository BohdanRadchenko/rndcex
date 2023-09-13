import { BorderGradient } from '@/componnents/BorderGradient';
import { CardList } from '@/componnents/CardList';
import { LayoutLogo } from '@/componnents/Layout';
import { DevelopmentCardIcon } from '@/modules/Development/DevelopmentCardIcon';
import { developmentList } from '@/modules/Development/mock';
import { Stack, Typography } from '@mui/material';
import { memo } from 'react';

export const Development = memo(() => {
	return (
		<LayoutLogo>
			<Typography
				variant="title"
				sx={{ mb: 3 }}
			>
				<Typography
					variant="title"
					color="orange"
					component="span"
					sx={({ palette: { typography } }) => ({ color: typography.orange })}
				>
					Our&nbsp;
				</Typography>
				Technology Stack for Crypto
				Exchange Development
			</Typography>
			<Typography
				variant="subtitle"
				sx={{ mb: 5 }}
			>
				We at R’N’D CEX use upgraded and new-fangled technologies for developing and designing the whitelabel
				crypto exchange software.
			</Typography>
			<CardList list={developmentList}>
				{({ title, icons }) => {
					return (
						<Stack
							spacing={3}
							sx={{ p: 2 }}
						>
							<BorderGradient>
								<Typography
									variant="body1"
									component="pre"
									mb={1.5}
									fontSize={26}
								>
									{title}
								</Typography>
							</BorderGradient>
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
});
