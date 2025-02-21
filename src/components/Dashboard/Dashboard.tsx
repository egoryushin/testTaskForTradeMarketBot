import { useEffect, useMemo, useState } from 'react'
import data from '../../../data.min.json'
import BotCard, { IBot } from '../BotCard/BotCard'
import MyChart from '../MyChart/MyChart'
import TimeRange from '../TimeRange/TimeRange'
import TradingCapital from '../TradingCapital/TradingCapital'
import styles from './styles.module.css'

// типы интервалов
export type Interval = '24h' | '7d' | '30d' | 'all_time'

const Dashboard: React.FC = () => {
	const [interval, setInterval] = useState<Interval | null>(null)

	// Функция для проверки корректности интервала
	const isValidInterval = (
		value: string
	): value is '24h' | '7d' | '30d' | 'all_time' => {
		return ['24h', '7d', '30d', 'all_time'].includes(value)
	}

	// обработчик интервалов
	const handleIntervalChange = (newInterval: Interval) => {
		setInterval(newInterval)
	}

	// Загрузка интервала из localStorage
	useEffect(() => {
		const savedInterval = localStorage.getItem('selectedInterval')
		if (savedInterval && isValidInterval(savedInterval)) {
			setInterval(savedInterval as Interval)
		}
	}, [])

	// сохранение интервала в localStorage
	useEffect(() => {
		// console.log('Interval changed', interval)
		if (interval) {
			// interval не равен null
			localStorage.setItem('selectedInterval', interval)
		} else {
			localStorage.removeItem('selectedInterval') // если interval равен null
		}
	}, [interval])

	// мемоизация фильтра для ботов
	const filteredBots = useMemo(() => {
		if (!interval) return []
		return data.bots.map(bot => ({
			name: bot.name as IBot,
			cost: bot.cost,
			profit: (bot[interval] as number) ?? 0,
		}))
	}, [interval])

	// объект данных для графика
	const chartDataMap: Record<Interval, number[]> = {
		'24h': [32.6, 28.4, 30.1, 34.5, 36.2],
		'7d': [20.1, 22.3, 25.6, 27.8, 30.0],
		'30d': [10.5, 15.2, 18.7, 20.3, 22.1],
		all_time: [5.1, 8.3, 12.4, 15.6, 18.9],
	}

	// мемоизация для графика
	const chartData = useMemo(() => {
		if (!interval) return []
		return chartDataMap[interval]
	}, [interval])

	// общий процент для props totalProfit
	const getTotalProfit = useMemo(() => {
		if (!interval || !data.bots.length) return 0
		const profits = data.bots.map(
			bot => bot[interval as keyof typeof bot] as number
		)
		const totalProfit = profits.reduce((sum, profit) => sum + profit, 0)
		const averageProfit = totalProfit / data.bots.length
		return parseFloat(averageProfit.toFixed(2))
	}, [interval])

	return (
		<div className={styles.dashboard}>
			<TradingCapital
				capital={data.trading_capital}
				currency={data.trading_capital_currency}
				balance={data.balance}
				onHold={data.on_hold}
			/>
			<MyChart
				interval={interval}
				dataChart={chartData}
				totalProfit={getTotalProfit}
			/>
			<BotCard bots={filteredBots} />
			<TimeRange onChange={handleIntervalChange} />
		</div>
	)
}

export default Dashboard
