import React, { Component } from "react";

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}

	componenetWillMount() {
		this.getTimeUntil(this.props.deadLine);
	}

	componentDidMount() {
		setInterval(() => this.getTimeUntil(this.props.deadLine), 1000);
	}

	leadingZero(num) {
		return num < 10 ? "0" + num : num;
	}

	getTimeUntil(deadLine) {
		const time = Date.parse(deadLine) - Date.parse(new Date());
		const seconds = Math.floor( (time / 1000) % 60);
		const minutes = Math.floor( (time / 1000 / 60) % 60);
		const hours = Math.floor(time / (1000 * 60 * 60) % 24);
		const days = Math.floor(time / (1000 * 60 * 60 * 24));
		this.setState({days, hours, minutes, seconds});
	}

	render() {
		return (
			<div>
					<div className="Clock-Days">{this.leadingZero(this.state.days)} dias</div>
					<div className="Clock-Hours">{this.leadingZero(this.state.hours)} horas</div>
					<div className="Clock-Minutes">{this.leadingZero(this.state.minutes)} minutos</div>
					<div className="Clock-Minutes">{this.leadingZero(this.state.seconds)} segundos</div>
			</div>
		)
	}
}

export default Clock;
