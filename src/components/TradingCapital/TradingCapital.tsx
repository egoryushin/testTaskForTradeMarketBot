import styles from './styles.module.css'

interface TradingCapitalProps {
	capital: number
	currency: string
	balance: number
	onHold: number
}

const TradingCapital: React.FC<TradingCapitalProps> = ({
	capital,
	currency,
	balance,
	onHold,
}) => {
	if (!capital || !currency || !balance || !onHold) {
		return <p>Ошибка: Не все данные доступны.</p>
	}
	return (
		<div>
			<div className={styles.tradingCapital}>
				<div className={styles.tradingCapitalLeftInfo}>
					<h2>Trading Capital</h2>
					<p className={styles.tradingCapitalization}>
						<span className={styles.tradingCapitalizationEthereum}>
							{capital.toFixed(5)} {currency.toUpperCase()}
						</span>
					</p>
				</div>
				<div className={styles.tradingCapitalRightInfo}>
					<p className={styles.tradingCapitalNotation}>
						Balance:
						<span className={styles.tradingCapitalNumbers}>{balance}</span>
					</p>
					<p className={styles.tradingCapitalNotation}>
						On hold:
						<span className={styles.tradingCapitalNumbers}>{onHold}</span>
					</p>
				</div>
			</div>
		</div>
	)
}

export default TradingCapital
