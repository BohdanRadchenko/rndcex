import * as React from 'react';
import { Suspense } from 'react';
import { LoadingMask } from '../LoadingMask';

export const LazyLoader =
	(Component: React.LazyExoticComponent<unknown>, showLoader: boolean = true) =>
		(props: unknown): JSX.Element =>
			(
				<Suspense fallback={showLoader ? <LoadingMask/> : null}>
					<Component {...props} />
				</Suspense>
			);
