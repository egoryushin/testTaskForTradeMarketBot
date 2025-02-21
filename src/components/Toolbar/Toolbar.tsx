import React from 'react'
import dashboardIcon from '../../assets/toolbar-icon/dashboard-icon.png'
import graphIcon from '../../assets/toolbar-icon/graph-icon.png'
import marketIcon from '../../assets/toolbar-icon/market-icon.png'
import priceIcon from '../../assets/toolbar-icon/price-icon.png'
import profileIcon from '../../assets/toolbar-icon/profile-icon.png'
import styles from './styles.module.css'

const toolBarItems = [
	{ icon: dashboardIcon, alt: 'Dashboard', label: 'Dashboard' },
	{ icon: graphIcon, alt: 'Graph', label: 'Graph' },
	{ icon: marketIcon, alt: 'Bot market', label: 'Bot market' },
	{ icon: priceIcon, alt: 'Coin prices', label: 'Coin prices' },
	{ icon: profileIcon, alt: 'Profile', label: 'Profile' },
]

const Toolbar: React.FC = () => {
	return (
		<div className={styles.toolbar}>
			<div className={styles.bottomToolbar}>
				{toolBarItems.map((item, index) => {
					return (
						<div className={styles.toolbarItem} key={index}>
							<img src={item.icon} alt={item.alt} />
							<span>{item.label}</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Toolbar
