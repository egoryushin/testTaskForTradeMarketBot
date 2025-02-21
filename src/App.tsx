import React from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Toolbar from './components/Toolbar/Toolbar'
import './styles/global.css'

const App: React.FC = () => {
	return (
		<div className='app'>
			<Header />
			<Dashboard />
			<Toolbar />
		</div>
	)
}

export default App
