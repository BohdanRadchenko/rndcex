import { LazyLoader } from '@/componnents/LazyLoader';
import { lazy, memo } from 'react';

const HeadSectionModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'HeadSection module' */ '../../modules/HeadSection')));
const SolutionServicesModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'SolutionServices module' */ '../../modules/SolutionServices')));
const CryptoExchangeModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'CryptoExchange module' */ '../../modules/CryptoExchange')));
const SecurityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Security module' */ '../../modules/Security')));
const ManagementModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Management module' */ '../../modules/Management')));
const ProductsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Products module' */ '../../modules/Products')));
const FunctionalityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Functionality module' */ '../../modules/Functionality')));
const DevelopmentModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Development module' */ '../../modules/Development')));
const IntegrationsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Integrations module' */ '../../modules/Integrations')));
const BenchmarkingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Benchmarking module' */ '../../modules/Benchmarking')));
const WorksModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Works module' */ '../../modules/Works')));
const PricingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Pricing module' */ '../../modules/Pricing')));

export const HomePage = memo(() => {
	return (
		<>
			<HeadSectionModule/>
			<SolutionServicesModule/>
			<CryptoExchangeModule/>
			<SecurityModule/>
			<ManagementModule/>
			<ProductsModule/>
			<FunctionalityModule/>
			<DevelopmentModule/>
			<IntegrationsModule/>
			<BenchmarkingModule/>
			<WorksModule/>
			<PricingModule/>
		</>
	);
});
