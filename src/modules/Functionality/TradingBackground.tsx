import snap12Image from '@/images/snap12.png';
import snap13Image from '@/images/snap13.png';
import { memo } from 'react';
import { BackgroundImageWrapperStyle } from './styled';

export const TradingBackground = memo(() => {
	return (
		<BackgroundImageWrapperStyle
			direction="row"
			spacing="28px"
		>
			<img
				src={snap12Image}
				alt="snap 12"
			/>
			<img
				src={snap13Image}
				alt="snap 12"
			/>
		</BackgroundImageWrapperStyle>
	);
});
