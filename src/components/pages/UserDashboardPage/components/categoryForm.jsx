import React, { Component } from 'react';
import { RangeStepInput } from 'react-range-step-input';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

const myOptions = {
	fitness: ['select sub-category', ' gym', ' yoga', ' sports', ' others'],
	academic: [
		'select sub-category',
		' languages',
		' computer science',
		' school subjects',
		' others',
	],
	'arts&design': [
		'select sub-category',
		'instruments',
		' sing/Dance',
		'design & crafts',
		' others',
	],
	'cooking&baking': [
		'select sub-category',
		'cuisine',
		'baking',
		'mixology',
		'others',
	],
};

export class CategoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			forms: [{ id: Math.random(), data: {} }],
			selected: '',
			setSelected: [],
		};
	}

	changeOptionsHandler = (event) => {
		console.log(event);
		this.setState({ setSelected: event.target.value });

		if (event.target.value === 'academic') {
			this.setState({ setSelected: myOptions.academic });
		} else if (event.target.value === 'fitness') {
			this.setState({ setSelected: myOptions.fitness });
		} else if (event.target.value === 'arts&crafts') {
			this.setState({ setSelected: myOptions[event.target.value] });
		} else if (event.target.value === 'cooking&baking') {
			this.setState({ setSelected: myOptions[event.target.value] });
		}
	};

	sliderMagic(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ value: newVal });
	}

	render() {
		let options =
			this.props.isEdit && this.props.data.mainCategory
				? myOptions[this.props.data.mainCategory].map((e) => {
						return <option key={e}>{e}</option>;
				  })
				: this.state.setSelected.map((e) => {
						return <option key={e}>{e}</option>;
				  });
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
							value={this.props.data.mainCategory}
							onChange={(e) => {
								this.props.formChange(e, this.props.id, 'mainCategory');
								this.changeOptionsHandler(e);
							}}
						>
							<option>Select Category</option>
							<option>academic</option>
							<option>fitness</option>
							<option>cooking&baking</option>
							<option>arts&crafts</option>
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
									{options}
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
										value={
											this.props.data.experience >= 5
												? 5
												: this.props.data.experience
										}
										onChange={(e) => {
											this.props.formChange(e, this.props.id, 'experience');
										}}
									>
										<option>Years of Experience</option>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5 or more</option>
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
					</div>
				</div>
			</div>
		);
	}
}

export default CategoryForm;
