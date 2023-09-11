import { LazyLoader } from '@/componnents/LazyLoader';
import Root from '@/modules/Root';
import * as React from 'react';
import { lazy } from 'react';
import * as ReactDOM from 'react-dom/client';
import './styles/index.css';

const App = LazyLoader(lazy(() => import(/* webpackChunkName: 'App' */ './modules/App')));

ReactDOM
	.createRoot(document.getElementById('root')!)
	.render(
		<React.StrictMode>
			<Root>
				<App/>
			</Root>
		</React.StrictMode>,
	);
