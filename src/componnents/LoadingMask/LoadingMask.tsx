import * as React from 'react';
import { FC, memo } from 'react';

interface ILoadingMaskProps {
}

export const LoadingMask: FC<ILoadingMaskProps> = memo(() => <div>Loading ....</div>);
