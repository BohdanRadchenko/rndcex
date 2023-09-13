import { ReactComponent as AngularIcon } from '@/icons/Angular.svg';
import { ReactComponent as AwsIcon } from '@/icons/AWS.svg';
import { ReactComponent as BootstrapIcon } from '@/icons/Bootstrap.svg';
import { ReactComponent as CouchbaseIcon } from '@/icons/Couchbase.svg';
import { ReactComponent as DigitalOceanIcon } from '@/icons/DigitalOcean.svg';
import { ReactComponent as GoIcon } from '@/icons/Go.svg';
import { ReactComponent as GoogleCloudIcon } from '@/icons/GoogleCloud.svg';
import { ReactComponent as HetznerIcon } from '@/icons/Hetzner.svg';
import { ReactComponent as JavaIcon } from '@/icons/Java.svg';
import { ReactComponent as JavaScriptIcon } from '@/icons/JavaScript.svg';
import { ReactComponent as JenkinsIcon } from '@/icons/Jenkins.svg';
import { ReactComponent as KafkaIcon } from '@/icons/Kafka.svg';
import { ReactComponent as KotlinIcon } from '@/icons/Kotlin.svg';
import { ReactComponent as KubernetesIcon } from '@/icons/Kubernetes.svg';
import { ReactComponent as MariaDBIcon } from '@/icons/MariaDB.svg';

import { ReactComponent as NginixIcon } from '@/icons/Nginix.svg';

import { ReactComponent as NodeIcon } from '@/icons/Node.svg';
import { ReactComponent as PHPIcon } from '@/icons/PHP.svg';
import { ReactComponent as PythonIcon } from '@/icons/Python.svg';
import { ReactComponent as ReactIcon } from '@/icons/React.svg';
import { ReactComponent as RebbitMQIcon } from '@/icons/RebbitMQ.svg';
import { ReactComponent as SpringIcon } from '@/icons/Spring.svg';

import { ReactComponent as SwiftIcon } from '@/icons/Swift.svg';
import { ReactComponent as VueIcon } from '@/icons/Vue.svg';

import { ReactComponent as WebsocketIcon } from '@/icons/Websocket.svg';
import { IDevelopmentCardIconProps } from './DevelopmentCardIcon';

// import WooIcon from '@/icons/Woo.svg';

export interface IItem {
	title: string;
	icons: IDevelopmentCardIconProps[];
}

const fe = {
	title: 'Frontend',
	icons: [
		{ name: 'Nginx', icon: NginixIcon },
		{ name: 'AngularJS', icon: AngularIcon },
		{ name: 'React', icon: ReactIcon },
		{ name: 'JavaScript', icon: JavaScriptIcon },
		{ name: 'Bootstrap', icon: BootstrapIcon },
		{ name: 'Vue.js', icon: VueIcon },
	]
};

const be = {
	title: 'Backend',
	icons: [
		{ name: 'Node.js', icon: NodeIcon },
		{ name: 'PHP', icon: PHPIcon },
		{ name: 'Python', icon: PythonIcon },
		{ name: 'Java', icon: JavaIcon },
		{ name: 'Spring', icon: SpringIcon },
		{ name: 'Go', icon: GoIcon },
	]
};

const mapp = {
	title: 'Mobile App',
	icons: [
		{ name: 'Swift', icon: SwiftIcon },
		{ name: 'Kotlin', icon: KotlinIcon },
	]
};

const db = {
	title: 'Databases',
	icons: [
		{ name: 'Websocket\n API', icon: WebsocketIcon },
		{ name: 'React', icon: ReactIcon },
		{ name: 'Couchbase', icon: CouchbaseIcon },
		{ name: 'MariaDB', icon: MariaDBIcon },
	]
};

const ma = {
	title: 'Microservice\n Architecture',
	icons: [
		{ name: 'Kafka', icon: KafkaIcon },
		{ name: 'RabbitMQ', icon: RebbitMQIcon },
	]
};

const serv = {
	title: 'Servers',
	icons: [
		{ name: 'Amazon\n AWS', icon: AwsIcon },
		{ name: 'Google\n Cloud', icon: GoogleCloudIcon },
		{ name: 'Google\n Cloud', icon: DigitalOceanIcon },
		{ name: 'Kubernetes', icon: KubernetesIcon },
		{ name: 'Jenkins', icon: JenkinsIcon },
		{ name: 'Hetzner', icon: HetznerIcon },
	]
};

export const developmentList: IItem[] = [
	fe, be, mapp, db, ma, serv,
];
