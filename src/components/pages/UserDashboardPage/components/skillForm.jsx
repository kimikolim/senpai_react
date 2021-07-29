import React, { Component } from 'react';
import { RangeStepInput } from 'react-range-step-input';

const forceNumber = function (n) {
	n = Number(n);
	if (isNaN(n) || typeof n === 'undefined') {
		n = 0;
	}
	return n;
};

export class SkillForm extends Component {
	sliderMagic(e) {
		const newVal = forceNumber(e.target.value);
		this.setState({ value: newVal });
	}

	render() {
		return (
			<div className="skill">
				<div className="sub-skill">
					<div className="select">
						<select
							value={this.props.parentData.subCategory}
							onChange={(e) => {
								this.props.handleFormChange(e, 'subCategory');
							}}
						>
							<option>Select Sub-Category</option>
							<option>Physics</option>
							<option>Others</option>
						</select>
					</div>
					<div className="input-bar">
						<input
							class="input"
							type="text"
							placeholder="Specify your skill!"
							value={this.props.parentData.tags}
							onChange={(e) => {
								this.props.handleFormChange(e, 'tags');
							}}
						></input>
					</div>
				</div>
				<div className="slidey-info">
					<div class="control">
						<div class="select">
							<select
								value={this.props.parentData.experience}
								onChange={(e) => {
									this.props.handleFormChange(e, 'experience');
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
							value={this.props.parentData.rate}
							step={1}
							// onChange={this.onChange.bind(this)}
							onChange={(e) => {
								this.props.handleFormChange(e, 'rate');
								this.sliderMagic.bind(this);
							}}
						/>
						<div className="input-group-append">
							<span className="input-group-text ml-2">
								{this.props.parentData.rate}
							</span>
						</div>
					</div>
					<div className="comments">
						<input
							class="input is-primary"
							type="text"
							placeholder="Additional Comments"
							value={this.props.parentData.comments}
							onChange={(e) => {
								this.props.handleFormChange(e, 'comments');
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
					<span class="icon is-large">
  						<i class="far fa-minus-square"></i>
					</span>
						<p>Delete Skill</p>
					</button>
				</div>
			</div>
		);
	}
}

export default SkillForm;
