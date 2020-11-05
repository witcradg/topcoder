import React, { Component } from 'react';
import '../css/index.css';
import Simpletextarea from './simple-text-area';

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			output: ''
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ output: 'Dummy Translation...' });
		// https://www.npmjs.com/package/react-fetch
		// https://stackoverflow.com/questions/49017152/how-to-use-google-translation-api-with-react
	};

	handleChange = (event) => {
		console.log(event.target.value);
		this.setState({ input: event.target.value });
	};

	render() {
		return (
			<div className="form-container">
				<form className="translate-form" onSubmit={this.handleSubmit}>
					<Simpletextarea
						placeholdr="Input English word or phrase."
						classnam="form-field"
						handleChange={this.handleChange}
					/>
					<Simpletextarea placeholdr="Translation will appear here." classnam="form-field" readonly="true"
						valu={this.state.output} />
					<button className="form-field" type="submit">
						Translate
					</button>
				</form>
			</div>
		);
	}
}
export default App;
