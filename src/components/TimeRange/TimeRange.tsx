import React from 'react'
import { Interval } from '../Dashboard/Dashboard'
import styles from './styles.module.css'

interface ITimeRangeProps {
	onChange: (interval: Interval) => void
}

const TimeRange: React.FC<ITimeRangeProps> = ({ onChange }) => {
	return (
		<div className={styles.timeRange}>
			<p className={styles.timeRangeTitle}>Time Range: </p>
			<button className={styles.timeRangeBtn} onClick={() => onChange('24h')}>
				24h
			</button>
			<button className={styles.timeRangeBtn} onClick={() => onChange('7d')}>
				7 days
			</button>
			<button className={styles.timeRangeBtn} onClick={() => onChange('30d')}>
				30 days
			</button>
			<button
				className={styles.timeRangeBtn}
				onClick={() => onChange('all_time')}>
				All time
			</button>
		</div>
	)
}

export default TimeRange
