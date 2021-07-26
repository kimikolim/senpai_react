import React, { Component } from 'react';

export class SubmitButton extends Component {
	render() {
		return (
			<div className="big-buttons">
				<button className="button is-primary" onClick={this.props.handler}>
					<p>Submit</p>
				</button>
			</div>
		);
	}
}
