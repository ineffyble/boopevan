import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

var BoopMerch = React.createClass({
	noMoreMerch: function() {
		this.props.closeMerchFunction();
	},
	render: function() {
		const actions = [
		<FlatButton label="Buy a shirt" href="http://games.jackbox.tv/artifact/TeeKOGame/o2sLlu7XAdg7qmGLBWRFwV6S09Up19gJ" />,
		<FlatButton label="Close" onTouchTap={this.noMoreMerch} />
		];

		return (
			<Dialog
				title="NEW: Limited edition merchandise"
				modal={false}
				actions={actions}
				open={this.props.buyMerch}
				onRequestClose={this.noMoreMerch}
			>
				<div style={{float: 'left', width: 'auto'}} >
					<img src="BoopShirt.png" style={{maxWidth: '200px'}} />
				</div>
				<div style={{float: 'left', paddingLeft: '10px', maxWidth: '500px'}}>
					<p>For a limited time, you can get an <b>exclusive BoopEvan.com shirt!</b></p>
					<p>Endorsed by Evan himself, this shirt is sure to stand out at any party.</p>
					<p>Don't miss out on your chance to get this amazing shirt.</p>
					<p><small><i>Designed by Jen Ciliberto and Effy Elden. All rights reserved. By buying this shirt, you commit to booping Evan at least once every three months, or five encounters, whichever comes first.</i></small></p>
				</div>
			</Dialog>
		)
	}
});

export default BoopMerch;