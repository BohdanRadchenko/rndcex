import { ElementType, memo } from 'react';

export const createSvgIcon = (IconComponent: ElementType) => {
	console.log('IconComponent', IconComponent);
	// const Component = (props: unknown) => <div {...props}><IconComponent/></div>;
	// const Component = (props: unknown) => <svg {...props}>
	// 	<use></use>
	// </svg>;
	const Component = (props: unknown) => <div {...props}></div>;

	return memo(Component);
};
