import React, { Component } from 'react';
import Clock from "./Clock.jsx";
import { Form, FormControl, Button } from "react-bootstrap";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deadLine: "December 25, 2017",
			newDeadLine: ""
		}
	}

	changeDeadLine() {
		this.setState({deadLine: this.state.newDeadLine})
	}

	render() {
		return (
			<div className="App">
				<div className="App-Title">
					Cuenta regresiva para: { this.state.deadLine }
				</div>
				<Clock 
					deadLine={this.state.deadLine}
				/>
				<Form inLine>
					<FormControl
						className="DeadLine-Input"
						placeholder="Ingrese una fecha, formato: Mes Dia, Año"
						onChange= { event => this.setState({newDeadLine: event.target.value})}
					/>
					<Button onClick={()=> this.changeDeadLine()}>
						Submit
					</Button>
				</Form>
			</div>
		)
	}
}

export default App;
