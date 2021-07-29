import React, { Component, useState } from 'react';
import './UserProfile.scss';
import CategoryForm from './components/categoryForm';
import AddButton from './components/addButton';
import { SubmitButton } from './components/submitButton';

import axios from 'axios';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

const emptyForm = {
	mainCategory: '',
	subCategory: '',
	tags: '',
	rate: 0,
	experience: 0,
	comments: '',
};

class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalForm: {
				post: emptyForm,
				isOpen: false,
				
				
			},
			userSkills: [],
			forms: [
				{
					id: Math.random(),

					post: emptyForm,
				},
			],
		};
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.handleFormSubmission = this.handleFormSubmission.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	handleAddClick() {
		this.setState((prevState) => {
			let newForm = {
				id: Math.random(),
				post: emptyForm,
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

	componentDidMount() {
		this.getUserSkills();
	}

	getUserSkills() {
		axios
			.get(
				`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/skill`
			)
			.then((response) => {
				console.log(response.data[0].skills);
				this.setState({
					userSkills: response.data[0].skills,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleFormSubmission(e) {
		console.log('form trigger');
		e.preventDefault();

		let skillsData = this.state.forms.map((item) => {
			return item.post;
		});

		axios

			.post(
				`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/skill`,
				{
					skillsData: skillsData,
				}
			)
			.then(() => {
				toast('Skills updated successfully!');
				this.props.history.push(`/${this.props.match.params.userID}/skill`);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	handleUpdate() {
		let skillsData = this.state.forms.map((item) => {
			return item.post;
		});

		axios

			.patch(
				`http://localhost:8000/api/v1/dashboard/${this.props.match.params.userID}/skill/${this.props.match.params.skills._id}`,

				{
					skillsData: skillsData,
				}
			)
			.then(() => {
				toast('Skills updated successfully!');
				this.props.history.push(`/${this.props.match.params.userID}/skill`);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	sliderMagic(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ value: newVal });
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
	handleEdit(skillData) {
		this.setState({
			modalForm: {
				isOpen: true,
				post: skillData,
			},
		});
	}

	handleCloseModal() {
		console.log(this.state.currentModalForm);
		let currentModalForm = this.state.modalForm;
		currentModalForm.isOpen = !currentModalForm.isOpen;
		this.setState({ modalForm: currentModalForm });
		console.log('working');
		console.log(this.state.currentModalForm);
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

		let skillComponents = this.state.userSkills.map((skill) => {
			return (
				<article className="message is-primary">
					<div className="message-header">
						<p>My Skill Category: {skill.mainCategory}</p>
					</div>
					<div class="message-body">
						<strong>Skill SubCategory: {skill.subCategory}</strong>{' '}
						<h3>Years of experience: {skill.experience}</h3>
						<h3>Rate per hour: ${skill.rate}</h3>
						<h3>Comments: {skill.comments}</h3>
					</div>
					<button
						className="primary"
						onClick={() => {
							this.handleEdit(skill);
						}}
					>
						Edit
					</button>
				</article>
			);
		});

		return (
			<div className="container">
				<div className="columns">
					<div className="skills-display column">
						<h1>
							<strong>Set a Skill</strong>
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
				</div>
				<div
					className={`modal ${this.state.modalForm.isOpen ? 'is-active' : ''}`}
				>
					<div class="modal-background"></div>
					<div class="modal-content">
						<CategoryForm
							isEdit={true}
							delete={this.handleDeleteClick}
							id={this.state.modalForm.id}
							data={this.state.modalForm.post}
							// rate={this.state.modalForm.rate}
							formChange={this.handleFormChange}
							handleCloseModal={this.handleCloseModal}
							handleUpdate={this.handleUpdate}
						/>
					</div>
					<button
						className="modal-close is-large"
						aria-label="close"
						onClick={() => {
							this.handleCloseModal();
						}}
					></button>
					<button
						className="button"
						onClick={() => {
							this.handleUpdate();
						}}
					>
						Update
					</button>
				</div>
				<div className>
					<div className="skills-display column">
						<h1>
							<strong>Skills</strong>
						</h1>

						{skillComponents}
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(UserProfile);
