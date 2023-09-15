import { LazyLoader } from '@/componnents/LazyLoader';
import { lazy, memo } from 'react';

const HeadSectionModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'HeadSection module' */ '../../modules/HeadSection')));
const SolutionServicesModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'SolutionServices module' */ '../../modules/SolutionServices')));
const CryptoExchangeModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'CryptoExchange module' */ '../../modules/CryptoExchange')));
const MarketOverviewModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'CryptoExchange module' */ '../../modules/MarketOverview')));
const SecurityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Security module' */ '../../modules/Security')));
const ExchangeCoreModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Security module' */ '../../modules/ExchangeCore')));
const ArchitectureModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Security module' */ '../../modules/Architecture')));
const AdminPanelModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Management module' */ '../../modules/AdminPanel')));
const ManagementModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Management module' */ '../../modules/Management')));
const ProductsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Products module' */ '../../modules/Products')));
const ChooseSectionModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Products module' */ '../../modules/ChooseSection')));
const FunctionalityModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Functionality module' */ '../../modules/Functionality')));
const DevelopmentModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Development module' */ '../../modules/Development')));
const IntegrationsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Integrations module' */ '../../modules/Integrations')));
const BenchmarkingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Benchmarking module' */ '../../modules/Benchmarking')));
const WorksModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Works module' */ '../../modules/Works')));
const PricingModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Pricing module' */ '../../modules/Pricing')));

export const HomePage = memo(() => {
	return (
		<>
			{/*1*/}
			<HeadSectionModule/>

			{/*2*/}
			<SolutionServicesModule/>

			{/*3*/}
			<CryptoExchangeModule/>

			{/*4*/}
			<MarketOverviewModule/>

			{/*5*/}
			<FunctionalityModule/>

			{/*6*/}
			<ExchangeCoreModule/>

			{/*7*/}
			<ArchitectureModule/>

			{/*8*/}
			<SecurityModule/>

			{/*9*/}
			{/*TODO: remove bg img*/}
			<AdminPanelModule/>

			{/*10*/}
			<ManagementModule/>

			{/*11*/}
			<ProductsModule/>

			{/*12*/}
			{/*TODO: remove bg img*/}
			<ChooseSectionModule/>

			{/*13*/}
			<DevelopmentModule/>

			{/*14*/}
			<IntegrationsModule/>

			{/*15*/}
			<BenchmarkingModule/>

			{/*16*/}
			<WorksModule/>

			{/*17*/}
			<PricingModule/>
		</>
	);
});
