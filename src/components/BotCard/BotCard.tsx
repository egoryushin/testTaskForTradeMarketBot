import React from 'react'
import orangeBot from '../../assets/bots-icon/bot_attack-orange.png'
import redBot from '../../assets/bots-icon/bot_attack-red.png'
import blueBot from '../../assets/bots-icon/bot_balance-blue.png'
import greenBot from '../../assets/bots-icon/bot_defence-green.png'
import yellowBot from '../../assets/bots-icon/bot_megabot-yellow.png'
import blackBot from '../../assets/bots-icon/bot_place-black.png'
import styles from './styles.module.css'

interface IBotProps {
	bots: Array<{
		name: IBot
		cost: number
		profit: number
	}>
}
// типы ботов
export type IBot =
	| 'yellow_bot'
	| 'orange_bot'
	| 'green_bot'
	| 'red_bot'
	| 'blue_bot'
	| 'white_bot'

const BotCard: React.FC<IBotProps> = ({ bots }) => {
	const botsIcon: Record<IBot, string> = {
		yellow_bot: yellowBot,
		orange_bot: orangeBot,
		green_bot: greenBot,
		red_bot: redBot,
		blue_bot: blueBot,
		white_bot: blackBot,
	}
	const botDisplayName: Record<IBot, string> = {
		yellow_bot: 'MEGABOT',
		orange_bot: 'ATTACK',
		green_bot: 'DEFENCE',
		red_bot: 'ATTACK',
		blue_bot: 'BALANCE',
		white_bot: 'PLACE BOT HERE',
	}

	// картинка бота
	const getBotIcon = (name: IBot): string => {
		return botsIcon[name as IBot]
	}

	// имя бота
	const getBotDisplayName = (name: IBot): string => {
		return botDisplayName[name as IBot]
	}

	return (
		<div className={styles.botGrid}>
			{bots.map(bot => (
				<div key={bot.name} className={styles.botCard}>
					<img
						src={getBotIcon(bot.name)}
						alt={getBotDisplayName(bot.name)}
						className={styles.botIcon}
					/>
					<h3>{getBotDisplayName(bot.name)}</h3>
					{getBotDisplayName(bot.name) !== 'PLACE BOT HERE' && (
						<p className={bot.profit >= 0 ? styles.positive : styles.negative}>
							{bot.profit}%
						</p>
					)}
				</div>
			))}
		</div>
	)
}

export default BotCard
