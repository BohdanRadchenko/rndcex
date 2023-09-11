import { LazyLoader } from '@/componnents/LazyLoader';
import { INTEGRATION_ROUTE, ROOT_ROUTE } from '@/constants/routes';
import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

const ErrorModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Error module' */ '../modules/Error')));
const IntegrationsModule = LazyLoader(lazy(() => import(/* webpackChunkName: 'Integrations module' */ '../modules/Integrations')));

export const routes: RouteObject[] = [
	{
		path: ROOT_ROUTE,
		element: <Outlet/>,
		children: [
			{
				path: INTEGRATION_ROUTE,
				element: <IntegrationsModule/>,
				errorElement: <ErrorModule/>,
			},
		],
	},
];
