import styles from './Header.module.css';
import Text from '../Text/Text';

export function Header() {
	return (
		<header className={styles.header}>
			<Text elementType='h1'>Cybermoms Header</Text>
		</header>
	);
}

export default Header;
