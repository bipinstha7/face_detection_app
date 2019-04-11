import React from 'react'
import ProfileIcon from '../Profile/ProfileIcon'

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
	if (isSignedIn) {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
			</nav>
		)
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
				<p className="f4 dim pr5 pointer" onClick={() => onRouteChange('signin')}>
					Sign in
				</p>
				<p className="f4 dim pr5 pointer" onClick={() => onRouteChange('register')}>
					Register
				</p>
			</nav>
		)
	}
}

export default Navigation
