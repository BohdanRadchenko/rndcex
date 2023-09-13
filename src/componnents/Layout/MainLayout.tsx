import { Container } from '@/componnents/Container';
import { FC, memo } from 'react';
import { ILayoutProps, Layout } from './Layout';

export const MainLayout: FC<ILayoutProps> = memo(({ children, ...props }) => {
	return (
		<Layout {...props}>
			<Container>
				{children}
			</Container>
		</Layout>
	);
});
