import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Trees from './trees';
import './App.css';



class GFG extends Component {
	render() {

		return (
			<React.Fragment>
				<Container maxWidth="sm">
					<Trees></Trees>
				</Container>
			</React.Fragment>

		);
	}
}

export default GFG;
