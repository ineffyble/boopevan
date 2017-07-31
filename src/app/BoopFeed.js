import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import {blue300} from 'material-ui/styles/colors';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import Booper from './Booper';
import BoopLogin from './BoopLogin';

var FirebaseConfig = {
	apiKey: "AIzaSyBP2z-fTpyCR4CGGkikAPHZ7LzJQgcZwQ4",
	authDomain: "boop-evan.firebaseapp.com",
	databaseURL: "https://boop-evan.firebaseio.com",
	storageBucket: "boop-evan.appspot.com",
	messagingSenderId: "392523705587"
};

Firebase.initializeApp(FirebaseConfig);

var BoopFeed = React.createClass({

	mixins: [ReactFireMixin],

	boopFeedStyle: {
		display: 'flex',
		position: 'fixed',
		bottom: '0',
		textAlign: 'center',
		width: '100%'
	},

	addBooper: function(name, imageUrl) {
		var thisBooper = {
			name: name,
			imageUrl: imageUrl
		};
		this.setState({
			localBooper: thisBooper
		});
	},

	componentWillMount: function() {
		this.bindAsArray(Firebase.database().ref('boopers').limitToLast(20), 'boopers');
	},

	componentDidUpdate: function() {
		if (this.props.booped && this.state.localBooper && !this.state.boopAdded) {
			this.firebaseRefs['boopers'].push(this.state.localBooper);
			this.setState({
				boopAdded: true
			});
		}
	},

	getInitialState: function() {
		return {
		    localBooper: false,
		    boopAdded: false
		}
	},

	render: function() {
		return (
			<div style={this.boopFeedStyle}>
				<BoopLogin returnBooper={this.addBooper} />

				{this.state.boopers.slice(0).reverse().slice(0, 20).map(function(booper, i) {
					return <Booper imageUrl={booper.imageUrl} name={booper.name} key={i} />
				})}
			</div>
		)
	}
});

export default BoopFeed;
