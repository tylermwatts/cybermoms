// components
import Text from '../Text/Text';

// assets
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<Text elementType='h1'>Cybermoms Header</Text>
		</header>
	);
}

export default Header;
