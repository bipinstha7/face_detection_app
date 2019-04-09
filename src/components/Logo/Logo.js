import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
	return (
		<div className="ml4 brainImage">
			<Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 100, width: 100 }}>
				<div className="Tilt-inner pt1">
					<img src={brain} alt="logo" />
				</div>
			</Tilt>
		</div>
	)
}

export default Logo
