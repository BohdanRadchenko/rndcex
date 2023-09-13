import { LazyLoader } from '@/componnents/LazyLoader';
import { ROOT_ROUTE } from '@/constants/routes';
import { lazy } from 'react';
import { Outlet, RouteObject } from 'react-router-dom';

const HomePage = LazyLoader(lazy(() => import(/* webpackChunkName: 'Home page' */ '../pages/HomePage')));

export const routes: RouteObject[] = [
	{
		path: ROOT_ROUTE,
		element: <Outlet/>,
		children: [
			{
				index: true,
				element: <HomePage/>,
			},
		]
	},
];
