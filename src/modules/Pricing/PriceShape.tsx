import { PriceShapeText, PriceShapeWrapper } from '@/modules/Pricing/styled';
import { Box, TypographyProps } from '@mui/material';
import { CSSProperties, FC, memo } from 'react';

interface IPriceShapeProps extends TypographyProps {
	text: string;
	sx?: CSSProperties;
}

export const PriceShape: FC<IPriceShapeProps> = memo(({ text, sx, ...typographyProps }) => {
	return (
		<Box display="flex">
			<PriceShapeWrapper>
				<PriceShapeText {...typographyProps} sx={{ ...sx }}>{text}</PriceShapeText>
			</PriceShapeWrapper>
		</Box>
	);
});
