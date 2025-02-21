import { Chart, registerables } from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

Chart.register(...registerables, annotationPlugin)

interface MyChartProps {
	interval: string | null
	dataChart: number[]
	totalProfit: number
}

const MyChart: React.FC<MyChartProps> = ({
	interval,
	dataChart,
	totalProfit,
}) => {
	const chartRef = useRef<HTMLCanvasElement>(null)
	const chartInctance = useRef<Chart | null>(null)

	useEffect(() => {
		if (chartRef.current) {
			const ctx = chartRef.current.getContext('2d')
			if (ctx) {
				if (chartInctance.current) {
					chartInctance.current.destroy()
				}

				chartInctance.current = new Chart(ctx, {
					type: 'line',
					data: {
						labels: ['22.04', '23.04', '24.04', '25.04', '26.04'],
						datasets: [
							{
								label: 'Profit',
								data: dataChart,
								borderColor: '#007bff',
								tension: 0.8,
								fill: true,
								backgroundColor: 'rgba(0, 123, 255, 0.1)',
							},
						],
					},
					options: {
						responsive: true,
						plugins: {
							legend: {
								display: false,
							},
							tooltip: {
								callbacks: {
									label: context => {
										return `${context.raw}%`
									},
								},
							},
							annotation: {
								annotations: {
									totalProfit: {
										type: 'label',
										position: 'center',
										content: `+${totalProfit}%`,
										color: '#4caf50',
										font: {
											size: 30,
										},
									},
								},
							},
						},
						scales: {
							y: {
								beginAtZero: true,
								ticks: {
									display: false,
								},
								grid: {
									display: false,
								},
							},
							x: {
								grid: {
									display: false,
								},
							},
						},
					},
				})
			}
		}
		return () => {
			if (chartInctance.current) {
				chartInctance.current.destroy()
			}
		}
	}, [interval, dataChart, totalProfit])

	return <canvas ref={chartRef} className={styles.chart} />
}

export default MyChart
