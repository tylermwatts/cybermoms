import { Text } from '../components';

import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<section className={styles.section}>
			<Text elementType='h1'>Welcome to CyberMoms!</Text>
			<Text elementType='sub'>Tech parenting made easy</Text>
			<Text>Check out our blog entries</Text>
		</section>
	);
}
