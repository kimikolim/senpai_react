import React, { Component } from 'react';
import { RangeStepInput } from 'react-range-step-input';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

export class CategoryForm extends Component {
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

	sliderMagic(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ value: newVal });
	}

	render() {
		return (
			<div className="columns">
				<div className="category column">
					<button
						onClick={() => this.props.delete(this.props.id)}
						className="button is-danger is-small"
					>
						<i class="far fa-minus-square"></i>
					</button>

					<div className="select is-primary">
						<select
							value={this.state.mainCategory}
							onChange={(e) => {
								this.props.formChange(e, this.props.id, 'mainCategory');
							}}
						>
							<option>Select Category</option>
							<option>academic</option>
							<option>fitness</option>
							<option>cooking&Baking</option>
							<option>arts&Design</option>
						</select>
					</div>

					<div className="skill">
						<div className="sub-skill">
							<div className="select">
								<select
									value={this.props.data.subCategory}
									onChange={(e) => {
										this.props.formChange(e, this.props.id, 'subCategory');
									}}
								>
									<option>Select Sub-Category</option>
									<option>gym</option>
									<option>yoga</option>
									<option>sports</option>
									<option>languages</option>
									<option>computer science</option>
									<option>school subjects</option>
									<option>instruments</option>
									<option>sing/dance</option>
									<option>design & crafts</option>
									<option>cuisine</option>
									<option>baking</option>
									<option>mixology</option>
									<option>Others</option>
								</select>
							</div>
							<div className="input-bar">
								<input
									class="input"
									type="text"
									placeholder="Specify your skill!"
									value={this.props.data.tags}
									onChange={(e) => {
										this.props.formChange(e, this.props.id, 'tags');
									}}
								></input>
							</div>
						</div>
						<div className="slidey-info">
							<div class="control">
								<div class="select">
									<select
										value={this.props.data.experience}
										onChange={(e) => {
											this.props.formChange(e, this.props.id, 'experience');
										}}
									>
										<option>Years of Experience</option>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5 or more</option>
									</select>
								</div>
							</div>
							<div className="slider">
								<h3>Your rate per hour ($)</h3>
								<RangeStepInput
									min={0}
									max={100}
									value={this.props.data.rate}
									step={1}
									// onChange={this.onChange.bind(this)}
									onChange={(e) => {
										this.props.formChange(e, this.props.id, 'rate');
										this.sliderMagic.bind(this);
									}}
								/>
								<div className="input-group-append">
									<span className="input-group-text ml-2">
										{this.props.data.rate}
									</span>
								</div>
							</div>
							<div className="comments">
								<input
									class="input is-primary"
									type="text"
									placeholder="Additional Comments"
									value={this.props.data.comments}
									onChange={(e) => {
										this.props.formChange(e, this.props.id, 'comments');
									}}
								/>
							</div>
						</div>
						<div className="my-buttons">
							<button
								className="button is-primary is-small"
								onClick={() => this.props.handleAddClick()}
							>
								<i class="far fa-plus-square"></i>
								<p>Add Skill</p>
							</button>
							<button
								className="button is-danger is-small"
								onClick={() => this.props.delete(this.props.id)}
							>
								<i class="far fa-minus-square"></i>
								<p>Delete Skill</p>
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CategoryForm;
