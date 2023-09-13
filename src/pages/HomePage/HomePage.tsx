import { LazyLoader } from '@/componnents/LazyLoader';
import { lazy, memo } from 'react';

const ManagementModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Management module' */ '../../modules/Management')));
const ProductsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Products module' */ '../../modules/Products')));
const FunctionalityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Functionality module' */ '../../modules/Functionality')));
const DevelopmentModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Development module' */ '../../modules/Development')));
const IntegrationsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Integrations module' */ '../../modules/Integrations')));
const WorksModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Works module' */ '../../modules/Works')));
const PricingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Pricing module' */ '../../modules/Pricing')));

export const HomePage = memo(() => {
	return (
		<>
			<ManagementModule/>
			<ProductsModule/>
			<FunctionalityModule/>
			<DevelopmentModule/>
			<IntegrationsModule/>
			<WorksModule/>
			<PricingModule/>
		</>
	);
});
