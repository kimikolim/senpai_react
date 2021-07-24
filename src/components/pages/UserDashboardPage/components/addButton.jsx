import React, { Component } from 'react';
import CategoryForm from './categoryForm';

export class AddButton extends Component {
	constructor(props) {
		super(props);
		// if (this.props.handleAddClick){
		// 	this.handleAddClick = this.props.handleAddClick.bind(this)
		// }
	}
	render() {
		return (
			<div className="columns">
				<div className="my-buttons column is-1">
					<button
						className="button is-primary is-small"
						onClick={ () => this.props.handleAddClick()}
					>
						<i class="far fa-plus-square"></i>
					</button>
				</div>
			</div>
		);
	}
}

export default AddButton;
