import React, { Component } from 'react';

export class AddButton extends Component {
	render() {
		return (
			<div className="columns">
				<div className="my-buttons column is-1">
					<button
						className="button is-primary is-medium"
						onClick={() => this.props.handleAddClick()}
					>
					<span class="icon is-medium">
  						<i class="far fa-plus-square"></i>
					</span>

					</button>
				</div>
			</div>
		);
	}
}

export default AddButton;
