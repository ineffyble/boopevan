import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

var BoopButton = React.createClass({
	render: function() {
		return (
			<RaisedButton
				label="Boop The Evan"
		    	secondary={true}
		   		onTouchTap={this.props.boopFunction}
		  	/>
		)
	}
});

export default BoopButton;
