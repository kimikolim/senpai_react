import React, { Component } from 'react';

export class AddButton extends Component {
	render() {
		return (
			<div className="columns">
				<div className="my-buttons column is-1">
					<button
						className="button is-primary is-small"
						onClick={() => this.props.handleAddClick()}
					>
						<i class="far fa-plus-square"></i> Add New
					</button>
				</div>
			</div>
		);
	}
}

export default AddButton;
