import React, { Component } from 'react';
import './UserProfile.scss';
import CategoryForm from './components/categoryForm';
import AddButton from './components/addButton';
import { SubmitButton } from './components/submitButton';
import { EditButton } from './components/editButton';

export class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			forms: [{ id: Math.random(), data: {} }],
		};
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}
	handleAddClick() {
		this.setState((prevState) => {
			let newForm = { id: Math.random(), data: {} };
			return { forms: [...prevState.forms, newForm] };
		});
	}

	handleDeleteClick(id) {
		this.setState((prevState) => {
			let updatedForms = prevState.forms.filter((form) => form.id !== id);
			return { forms: updatedForms };
		});
	}

	render() {
		let { counter } = this.state;
		let formComponents = this.state.forms.map((form) => {
			return <CategoryForm key={form.id} delete={this.handleDeleteClick} id={form.id} />;
		});
		const buttonAdd = () => {
			if (counter) {
				return <CategoryForm />;
			}
		};

		return (
			<div className="container">
				<div className="columns">
					<div className="sidebar column is-one-quarter">
						<center>
							<img src="https://via.placeholder.com/200" alt="Avatar" />
						</center>
						<div className="box">Name</div>
						<div className="box">Age</div>
					</div>
					<div className="skills-display column">
						<h1>
							<strong>Skills</strong>
						</h1>
						{formComponents}
					</div>
					<div className="my-buttons column is-1">
						<AddButton handleAddClick={this.handleAddClick} />
						<button className="button is-danger is-small">
							<i class="far fa-minus-square"></i>
						</button>
					</div>
				</div>
				<div className="big-buttons">
					<SubmitButton />
					<EditButton />
				</div>
			</div>
		);
	}
}

export default UserProfile;
