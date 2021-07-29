import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Checkbox from './Checkbox';
import { RangeStepInput } from 'react-range-step-input';

const OPTIONS = {
	fitness: [' gym', ' yoga', ' sports', ' others'],
	academic: [' languages', ' computer science', ' school subjects', ' others'],
	'arts&crafts': ['instruments', ' sing/Dance', 'design and crafts', ' others'],
	'cooking&baking': [' cuisine', ' baking', ' mixology', ' others'],
};

export class FilterSidebar extends Component {
	state = {
		checkboxes: OPTIONS[this.props.match.params.mainCategory].reduce(
			(options, option) => ({
				...options,
				[option]: false,
			}),
			{}
		),
	};

	componentDidMount() {
		console.log(OPTIONS[this.props.match.params.mainCategory]);
	}

	selectAllCheckboxes = (isSelected) => {
		Object.keys(this.state.checkboxes).forEach((checkbox) => {
			this.setState((prevState) => ({
				checkboxes: {
					...prevState.checkboxes,
					[checkbox]: isSelected,
				},
			}));
		});
	};

	handleSearchKeyword(e) {
		e.preventDefault();
	}

	handleFormSubmit = (formSubmitEvent) => {
		formSubmitEvent.preventDefault();

		Object.keys(this.state.checkboxes)
			.filter((checkbox) => this.state.checkboxes[checkbox])
			.forEach((checkbox) => {
				console.log(checkbox, 'is selected.');
			});
	};

	createCheckbox = (option) => (
		<Checkbox
			label={option}
			// isSelected={this.state.checkboxes[option]}
			handleCheckboxChange={this.props.handleCheckboxChange}
			key={option}
			performFilter={this.props.performFilter}
			isSelected={this.props.subCategory[option]}
		/>
	);

	createCheckboxes = () =>
		OPTIONS[this.props.match.params.mainCategory].map(this.createCheckbox);

	render() {
		return (
			<div>
				<form
					onSubmit={(e) => {
						this.handleFormSubmit(e);
					}}
				>
					<br />
					{/* <p className="menu-label">
						Search by Keyword <i class="fas fa-filter"></i>
					</p> */}

					{/* <div class="field has-addons">
						<div class="control">
							<input class="input" type="text" placeholder="Input Skill Tags" />
						</div>

						<br />
						<div class="control">
							<a
								class="button is-info"
								onClick={(e) => {
									this.handleSearchKeyword(e);
								}}
							>
								Search
							</a>
						</div>
					</div> */}

					<br />

					<p className="menu-label">
						Search by Filters <i class="fas fa-filter" />
					</p>

					<br />

					<p className="menu-label"><i class="fas fa-book-reader"></i> Years of Experience</p>

					<div className="dropdown">
						<div class="control">
							<div class="select">
								<select
									defaultValue={this.props.experience}
									onChange={(e) => this.props.performFilter(e, 'experience')}
								>
									<option value="">Years</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5 or more</option>
								</select>
							</div>
						</div>
					</div>

					<br />
					<br />

					<div className="menu-label"><i class="fas fa-shapes"></i> Skill Sub-categories</div>

					{this.createCheckboxes()}

					<br />

					<div className="menu-label"><i class="fas fa-money-bill-alt"></i> Rates (Per Hour)</div>

					<div className="slider">
						<RangeStepInput
							min={0}
							max={100}
							value={this.props.rate}
							step={1}
							// onChange={this.onChange.bind(this)}
							onChange={(e) => {
								this.props.sliderMagic(e);
								this.props.performFilter(e, 'rate');
							}}
						/>
						<div className="input-group-append">
							<span className="input-group-text ml-2">{this.props.rate}</span>
						</div>
					</div>
					{/* <div className="control has-icons-left level-item">
						<input className="input" type="text" placeholder="Maximum Rate" />

						<span className="icon is-small is-left">
							<i className="fas fa-dollar-sign"></i>
						</span>
					</div> */}

				</form>

				<br />
			</div>
		);
	}
}

export default withRouter(FilterSidebar);
