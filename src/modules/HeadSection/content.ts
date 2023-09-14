import snap31 from '@/images/snap31.png';
import snap41 from '@/images/snap41.png';

export interface ISolutionData {
	title: string;
	features: string[];
	img: string;
}

export const solutionServiceData: ISolutionData[] = [
	{
		title: 'Solutions',
		features: [
			'Centralized Exchanges (CEXs)',
			'Decentralized Exchanges (DEXs)',
			'Crypto Payments Infrastructure',
			'Digital Wallets',
			'Matching & Trading Engine',
			'Payment Processing',
			'Custody Solutions',
			'Trading Analytics Tools'
		],
		img: snap31,
	},
	{
		title: 'Services',
		features: [
			'Web Development',
			'Mobile Development',
			'Blockchain Development',
			'Smart Contract Development',
			'Technical Consulting',
			'Blockchain Consulting',
			'CEX Support & Maintenance Services'
		],
		img: snap41,
	}
];
