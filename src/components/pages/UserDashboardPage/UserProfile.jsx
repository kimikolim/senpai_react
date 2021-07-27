import React, { Component, useState } from 'react';
import './UserProfile.scss';
import CategoryForm from './components/categoryForm';
import AddButton from './components/addButton';
import { SubmitButton } from './components/submitButton';
import { EditButton } from './components/editButton';
import axios from 'axios';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom'


 class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
			forms: [
				{
					id: Math.random(),

					post: {
						mainCategory: '',
						subCategory: '',
						tags: '',
						rate: 0,
						experience: 0,
						comments: '',
					},
				},
			],
		};
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
	}

	handleAddClick() {
		this.setState((prevState) => {
			let newForm = {
				id: Math.random(),
				post: {
					mainCategory: '',
					subCategory: '',
					tags: '',
					rate: 0,
					experience: 0,
					comments: '',
				},
			};
			return { forms: [...prevState.forms, newForm] };
		});
	}

	handleDeleteClick(id) {
		this.setState((prevState) => {
			let updatedForms = prevState.forms.filter((form) => form.id !== id);
			return { forms: updatedForms };
		});
	}

	handleData = (categoryData) => {
		this.setState({
			...categoryData,
		});
	};

	handleFormSubmission(e) {
		console.log('form trigger');
		e.preventDefault();

		let skillsData = this.state.forms.map( (item) => {
			return item.post
		})

		axios.post(`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/skill`, {
			skillsData: skillsData
		})
			.then((response) => {
				console.log(response);
				toast('Skills updated successfully!');
				this.props.history.push(`/${this.props.match.params.userID}/skill`);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleFormChange(e, id, fieldName) {
		this.setState((prevState) => {
			let updatedForms = prevState.forms.map((form) => {
				if (form.id !== id) {
					return form;
				}
				if (fieldName === 'rate' || fieldName === 'experience') {
					return {
						...form,
						post: { ...form.post, [fieldName]: parseInt(e.target.value) },
					};
				}
				return {
					...form,
					post: { ...form.post, [fieldName]: e.target.value },
				};
			});
			return { forms: updatedForms };
		});
	}

	render() {
		let categoryComponents = this.state.forms.map((form) => {
			return (
				<CategoryForm
					key={form.id}
					delete={this.handleDeleteClick}
					id={form.id}
					data={form.post}
					formChange={this.handleFormChange}
				/>
			);
		});

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
						{categoryComponents}
					</div>
					<div className="my-buttons column is-1">
						<AddButton handleAddClick={this.handleAddClick} />
					</div>
				</div>
				<div className="big-buttons">
					<SubmitButton
						handler={(e) => {
							this.handleFormSubmission(e);
						}}
					/>

					<EditButton />
				</div>
			</div>
		);
	}
}

export default withRouter(UserProfile);
