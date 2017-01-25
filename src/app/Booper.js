import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import MediaQuery from 'react-responsive';

var Booper = React.createClass({

	booperStyle: {
		margin: 4
	},

	mobileLabelStyle: {
		padding: 0
	},

	render: function() {
		return (
			<div>
				<MediaQuery minWidth={961}>
					<Chip style={this.booperStyle}>
						<Avatar src={this.props.imageUrl} />
						<span style={{color: 'grey'}}>
							booped by 
						</span>
						&nbsp;{this.props.name}
					</Chip>
				</MediaQuery>
				<MediaQuery maxWidth={960}>
					<Chip style={this.booperStyle} labelStyle={this.mobileLabelStyle}>
						<Avatar src={this.props.imageUrl} />
						&nbsp;
					</Chip>
				</MediaQuery>
			</div>
		)
	}
});

export default Booper;