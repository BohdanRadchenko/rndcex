import image1 from '@/images/img_1.png';
import image2 from '@/images/img_2.png';
import image3 from '@/images/img_3.png';

interface IWorksContentData {
	features: string[];
	title: string;
	img: string;
}

export const worksContentData: IWorksContentData[] = [
	{
		title: 'Negotiation\n & Contracting',
		features: ['Solution Presentation', 'Requirements Discussion', 'Scope of Work Determination', 'Deal Structuring'],
		img: image1,
	},
	{
		title: 'Solution Customization\n & Deployment',
		features: ['Design Configuration & Customization', 'Exchange Setup', 'Code Transfer', 'Exchange Launch'],
		img: image2,
	},
	{
		title: 'Support\n & Maintenance',
		features: ['Training Sessions', 'Exchange Technical Support', 'Listings Support', 'Additional Integrations', 'Features Updates'],
		img: image3,
	},

];
