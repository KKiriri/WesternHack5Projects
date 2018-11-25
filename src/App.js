import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import Canvas from './components/Canvas/Canvas';
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
				<Canvas />
		);
	}
}

export default App;
