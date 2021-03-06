import React, {Component} from 'react';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

var BoopShare = React.createClass({

	boopShareStyle: {
		position: 'fixed',
		top: 0,
		width: '100%',
		textAlign: 'right',
		right: 20
	},

	boopShareButtonStyle: {
		paddingRight: 0,
		paddingLeft: 0,
		width: 'auto'
	},

	render: function() {
		return (
			<div style={this.boopShareStyle}>
				<IconButton href="https://www.facebook.com/commerce/products/1816408978400862/" target="_blank" style={this.boopShareButtonStyle}>
					<SvgIcon>
						<path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z"/>
						<path d="M5.2,10.3c0.7,0,1.4-0.1,2.1-0.1c0.3,0,0.4,0.1,0.4,0.3c0,2.7,0,7,0,7.9c0,0.3,0.1,0.4,0.4,0.4,c0.6,0,7.3,0,7.9,0c0.3,0,0.4,0,0.4-0.2c0-2.7,0-5.4,0-8.1c0-0.3,0.1-0.4,0.4-0.3c0.7,0.1,2.4,0,2.4-0.1c0.3-0.8,0.7-2.8,0.7-2.9,c-0.9-0.4-5.7-2.1-6-2.1c-0.4,0.7-1.1,1.1-1.9,1.1s-1.5-0.5-1.9-1.1c-0.3,0.1-5.8,2.1-6,2.1c0,0.1,0.5,2.4,0.7,2.9,C4.9,10.3,5,10.4,5.2,10.3z" style={{color: "#ffffff"}} />
					</SvgIcon>
				</IconButton>
				<IconButton href="https://twitter.com/intent/tweet?text=I%20just%20booped%20Evan!%20You%20should%20too.&url=https%3A%2F%2Fboopevan.com&hashtags=BoopTheEvan" target="_blank" style={this.boopShareButtonStyle}>
					<SvgIcon>
						<path d="M17.71,9.33C17.64,13.95 14.69,17.11 10.28,17.31C8.46,17.39 7.15,16.81 6,16.08C7.34,16.29 9,15.76 9.9,15C8.58,14.86 7.81,14.19 7.44,13.12C7.82,13.18 8.22,13.16 8.58,13.09C7.39,12.69 6.54,11.95 6.5,10.41C6.83,10.57 7.18,10.71 7.64,10.74C6.75,10.23 6.1,8.38 6.85,7.16C8.17,8.61 9.76,9.79 12.37,9.95C11.71,7.15 15.42,5.63 16.97,7.5C17.63,7.38 18.16,7.14 18.68,6.86C18.47,7.5 18.06,7.97 17.56,8.33C18.1,8.26 18.59,8.13 19,7.92C18.75,8.45 18.19,8.93 17.71,9.33M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
					</SvgIcon>
				</IconButton>
				<IconButton href="https://www.facebook.com/BoopEvan" target="_blank" style={this.boopShareButtonStyle}>
					<SvgIcon>
						<path d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
					</SvgIcon>
				</IconButton>
			</div>
		)
	}
});

export default BoopShare;