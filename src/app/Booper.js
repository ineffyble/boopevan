import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

var Booper = React.createClass({

	booperStyle: {
		margin: 4
	},

	render: function() {
		return (
			<Chip style={this.booperStyle}>
				<Avatar src={this.props.imageUrl} />
				<span style={{color: 'grey'}}>
					booped by 
				</span>
				&nbsp;{this.props.name}
			</Chip>
		)
	}
});

export default Booper;