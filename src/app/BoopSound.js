import React, {Component} from 'react';

var BoopSound = React.createClass({

	componentDidUpdate: function() {
		if (this.props.booping) {
			this.refs.BoopSound.play();
		}
	},

	render: function() {
		return (
			<audio ref="BoopSound">
				<source src="TheCryOfTheBoopedEvan.mp3" type="audio/mpeg" />
			</audio>
		)
	}
});

export default BoopSound;