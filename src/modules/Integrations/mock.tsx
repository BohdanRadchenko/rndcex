import { ICardIconProps } from '@/componnents/Card';
import { ReactComponent as AsanaIcon } from '@/icons/Asana.svg';
import { ReactComponent as AsureIcon } from '@/icons/Asure.svg';
import { ReactComponent as AwsIcon } from '@/icons/AWS.svg';
import { ReactComponent as ChainalysisIcon } from '@/icons/Chainalysis.svg';
import { ReactComponent as CiscoIcon } from '@/icons/Cisco.svg';
import { ReactComponent as DigitalOceanIcon } from '@/icons/DigitalOcean.svg';
import { ReactComponent as DrupalIcon } from '@/icons/Drupal.svg';
import { ReactComponent as EllipticIcon } from '@/icons/Elliptic.svg';
import { ReactComponent as EToroIcon } from '@/icons/EToro.svg';
import { ReactComponent as FreshdeskIcon } from '@/icons/Freshdesk.svg';
import { ReactComponent as GateIcon } from '@/icons/GateIo.svg';
import { ReactComponent as GoogleMapsIcon } from '@/icons/GoogleMaps.svg';
import { ReactComponent as HubSupportIcon } from '@/icons/HubSupport.svg';
import { ReactComponent as JiraIcon } from '@/icons/Jira.svg';
import { ReactComponent as JoomlaIcon } from '@/icons/Joomla.svg';
import { ReactComponent as KycaidIcon } from '@/icons/Kycaid.svg';
import { ReactComponent as MagentoIcon } from '@/icons/Magento.svg';
import { ReactComponent as OktaIcon } from '@/icons/Okta.svg';
import { ReactComponent as OndataIcon } from '@/icons/Ondata.svg';
import { ReactComponent as PANIcon } from '@/icons/PAN.svg';
import { ReactComponent as PayPalIcon } from '@/icons/PayPal.svg';
import { ReactComponent as PingIdentifyIcon } from '@/icons/PingIdentify.svg';
import { ReactComponent as SalesForceIcon } from '@/icons/SalesForce.svg';
import { ReactComponent as ShopifyIcon } from '@/icons/Shopify.svg';
import { ReactComponent as SquareIcon } from '@/icons/Square.svg';
import { ReactComponent as StripeIcon } from '@/icons/Stripe.svg';
import { ReactComponent as TrelloIcon } from '@/icons/Trello.svg';
import { ReactComponent as TwilloIcon } from '@/icons/Twillo.svg';
import { ReactComponent as WooIcon } from '@/icons/Woo.svg';
import { ReactComponent as WordPressIcon } from '@/icons/WordPress.svg';
import { ReactComponent as ZendeskIcon } from '@/icons/Zendesk.svg';
import { ReactComponent as ZohoIcon } from '@/icons/Zoho.svg';

// import WooIcon from '@/icons/Woo.svg';

export interface IItem {
	title: string;
	icons: ICardIconProps[];

}

const ci = {
	title: 'Cloud Infrastructure',
	icons: [
		{ name: 'Azure', icon: AsureIcon },
		{ name: 'AWS', icon: AwsIcon },
		{ name: 'Google Cloud', icon: DigitalOceanIcon },
	]
};

const paygate = {
	title: 'Payment Gateways',
	icons: [
		{ name: 'Stripe', icon: StripeIcon },
		{ name: 'Square', icon: SquareIcon },
		{ name: 'PayPal', icon: PayPalIcon },
	]
};

const ecomm = {
	title: 'E-commerce Platform',
	icons: [
		{ name: 'WooCommerce', icon: WooIcon },
		{ name: 'Shopify', icon: ShopifyIcon },
		{ name: 'Magento', icon: MagentoIcon },
	]
};

const tradplat = {
	title: 'Trading Platforms',
	icons: [
		{ name: 'eToro', icon: EToroIcon },
		{ name: 'Gate.io', icon: GateIcon },
	]
};

const customapis = {
	title: 'Custom APIs',
	icons: [
		{ name: 'Google Maps', icon: GoogleMapsIcon },
		{ name: 'Twilio', icon: TwilloIcon },
	]
};

const crms = {
	title: 'CRMs',
	icons: [
		{ name: 'Salesforce', icon: SalesForceIcon },
		{ name: 'HubSpot', icon: HubSupportIcon },
		{ name: 'Zoho', icon: ZohoIcon },
	]
};

const software = {
	title: 'PM Software',
	icons: [
		{ name: 'Asana', icon: AsanaIcon },
		{ name: 'Trello', icon: TrelloIcon },
		{ name: 'Jira', icon: JiraIcon },
	]
};

const providers = {
	title: 'KYC Providers',
	icons: [
		{ name: 'Ondata', icon: OndataIcon },
		{ name: 'Chainalysis', icon: ChainalysisIcon },
		{ name: 'Elliptic', icon: EllipticIcon },
		{ name: 'Kycaid', icon: KycaidIcon },
	]
};

const support = {
	title: 'Customer Support',
	icons: [
		{ name: 'Zendesk', icon: ZendeskIcon },
		{ name: 'Freshdesk', icon: FreshdeskIcon },
	]
};

const management = {
	title: 'Identity & Access\n Management',
	icons: [
		{ name: 'Okta', icon: OktaIcon },
		{ name: 'Ping Identity', icon: PingIdentifyIcon },
	]
};

const sc = {
	title: 'Security & Compliance',
	icons: [
		{ name: 'Cisco', icon: CiscoIcon },
		{ name: 'Palo Alto Networks', icon: PANIcon },
	]
};

const cms = {
	title: 'Content Management\n System',
	icons: [
		{ name: 'WordPress', icon: WordPressIcon },
		{ name: 'Drupal', icon: DrupalIcon },
		{ name: 'Joomla', icon: JoomlaIcon },
	]
};

export const integrationsList: IItem[] = [
	ci, paygate, ecomm, tradplat,
	customapis, crms, software, providers,
	support, management, sc, cms,
];
