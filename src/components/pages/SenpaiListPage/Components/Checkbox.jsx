import React from 'react';

const Checkbox = ({
	label,
	isSelected,
	handleCheckboxChange,
	performFilter,
}) => {
	let handleCheckboxFilter = (e) => {
		handleCheckboxChange(e, 'subCategory');
		performFilter(e, 'subCategory');
	};
	return (
		<div className="form-check">
			<label>
				<input
					type="checkbox"
					name={label}
					checked={isSelected}
					value={label}
					onChange={(e) => {
						handleCheckboxFilter(e);
					}}
					className="form-check-input"
				/>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
