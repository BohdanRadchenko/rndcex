import { LazyLoader } from '@/componnents/LazyLoader';
import { lazy, memo } from 'react';

const FunctionalityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Functionality module' */ '../../modules/Functionality')));
const DevelopmentModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Development module' */ '../../modules/Development')));
const IntegrationsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Integrations module' */ '../../modules/Integrations')));
const PricingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Pricing module' */ '../../modules/Pricing')));

export const HomePage = memo(() => {
	return (
		<>
			<FunctionalityModule/>
			<DevelopmentModule/>
			<IntegrationsModule/>
			<PricingModule/>
		</>
	);
});
