import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {indigo500, indigo200} from 'material-ui/styles/colors'
import MediaQuery from 'react-responsive';

var BoopLogin = React.createClass({

	boopLoginStyle: {
		margin: 4
	},

	getInitialState: function() {
		return {
			loggedIn: false,
			name: false
		}
	},

	componentDidMount: function() {
		window.fbAsyncInit = function() {
			FB.init({
			    appId      : '261258377641657',
		        version    : 'v2.7',
		        status     : true
		    });

		    FB.Event.subscribe('auth.statusChange', function(res) {
		    	if (res.authResponse) {
		    		FB.api('/me', {fields: 'first_name,picture'}, function(res) {
		    			booperFound(res['first_name'], res['picture']['data']['url']);
		    		});
		    	}
		    });
		}.bind(this);

		(function(d, s, id) {
	      var js, fjs = d.getElementsByTagName(s)[0];
	      if (d.getElementById(id)) return;
	      js = d.createElement(s); js.id = id;
	      js.src = "//connect.facebook.net/en_US/sdk.js";
	      fjs.parentNode.insertBefore(js, fjs);
	    }(document, 'script', 'facebook-jssdk'));

	    window.booperFound = this.booperFound;
	},

	getTheBooper: function() {
		FB.login();
	},

	booperFound: function(name, imageUrl) {
		this.setState({
			loggedIn: true,
			name: name
		});
		this.props.returnBooper(name, imageUrl);
	},

	render: function() {
		return (
				<Chip onTouchTap={this.getTheBooper} style={this.boopLoginStyle} backgroundColor={this.state.loggedIn ? indigo200 : indigo500} labelColor="white">
					<MediaQuery minWidth={961}>
						{this.state.loggedIn ? 'Logged in as ' + this.state.name : 'Login with Facebook'}
					</MediaQuery>
					<MediaQuery maxWidth={960}>
						{this.state.loggedIn ? this.state.name : 'Login'}
					</MediaQuery>
				</Chip>
		)
	}
});

export default BoopLogin;