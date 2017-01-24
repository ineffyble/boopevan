import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';

var BoopAlert = React.createClass({

	render: function() {
		return (
			<Snackbar
				open={this.props.booping}
				message="booped the snoot!!"
				autoHideDuration={4000}
				onRequestClose={this.props.boopedFunction}
			/>
		)
	}
});

export default BoopAlert;