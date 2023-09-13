import snap131Image from '@/images/snap131.png';
import { memo } from 'react';
import { BackgroundImageWrapperStyle } from './styled';

export const UserBackground = memo(() => {
	return (
		<BackgroundImageWrapperStyle
			direction="row"
			spacing="28px"
		>
			<img
				src={snap131Image}
				alt="snap 12"
			/>
		</BackgroundImageWrapperStyle>
	);
});
