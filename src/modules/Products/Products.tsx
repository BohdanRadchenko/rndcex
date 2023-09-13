import { BackgroundProductsSection, ELayoutColorSchema, LayoutLogo } from '@/componnents/Layout';
import { TypographyTitleWhite } from '@/componnents/Typography';
import { Stack } from '@mui/material';
import { memo } from 'react';
import { ProductsContent } from './ProductsContent';

export const Products = memo(() => {
	return (
		<LayoutLogo
			colorSchema={ELayoutColorSchema.DARK}
			backgroundComponent={BackgroundProductsSection}
		>
			<Stack
				spacing={5}
				flexGrow={1}
				pt={8}
				pb={5}
			>
				<TypographyTitleWhite>Additional Products</TypographyTitleWhite>
				<ProductsContent/>
			</Stack>
		</LayoutLogo>
	);
});
