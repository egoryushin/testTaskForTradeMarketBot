import menuIcon from '../../assets/toolbar-icon/menu-icon.png'
import refreshIcon from '../../assets/toolbar-icon/refresh-icon.png'
import styles from './styles.module.css'

const Header = () => {
	return (
		<div className={styles.header}>
			<img src={menuIcon} className={styles.headerMenu} alt='Menu' />
			<h3 className={styles.headerTitle}>Dashboard</h3>
			<img src={refreshIcon} className={styles.headerRefresh} alt='Refresh' />
		</div>
	)
}

export default Header
