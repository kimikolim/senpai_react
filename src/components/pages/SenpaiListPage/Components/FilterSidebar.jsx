import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { RangeStepInput } from 'react-range-step-input';
import Checkbox from "./Checkbox";

const OPTIONS = {
    fitness: ["Asian", "Western", "Fine Dining", "Others"],
    academia: ["Languages", "Computer Science", "School Subjects", "Others"],
    "arts&design": ["instruments", "sing/dance", "design & crafts", "Others"],
    "cooking&baking": ["Cusisine", "Baking", "Mixology", "Others"],
}

export class FilterSidebar extends Component {

    state = {
        checkboxes: OPTIONS[this.props.match.params.mainCategory].reduce(
          (options, option) => ({
            ...options,
            [option]: false
          }),
          {}
        )
      }
    
    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
          this.setState(prevState => ({
            checkboxes: {
              ...prevState.checkboxes,
              [checkbox]: isSelected
            }
          }))
        })
      }
    
    selectAll = () => this.selectAllCheckboxes(true);
    
    deselectAll = () => this.selectAllCheckboxes(false);
    
    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;
    
        this.setState(prevState => ({
          checkboxes: {
            ...prevState.checkboxes,
            [name]: !prevState.checkboxes[name]
          }
        }))
      }
    
    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
    
    Object.keys(this.state.checkboxes)
          .filter(checkbox => this.state.checkboxes[checkbox])
          .forEach(checkbox => {
            console.log(checkbox, "is selected.");
          });
      };
    
    createCheckbox = option => (
        <Checkbox
          label={option}
          isSelected={this.state.checkboxes[option]}
          onCheckboxChange={this.handleCheckboxChange}
          key={option}
        />
      );
    
    createCheckboxes = () => OPTIONS[this.props.match.params.mainCategory].map(this.createCheckbox);


    
    
    render() {
        return (

    <div>
            <div className="control has-icons-left level-item">
			<input className="input" type="text" placeholder="Skill in Category"></input>

			<span className="icon is-small is-left">
				<i className="fas fa-search"></i>
    		</span>
	        </div>

                <br></br>

        <p class="menu-label">Filters <i class="fas fa-filter"></i></p>
                
                <br></br>
                
                    <p className="menu-label">Years of Experience</p>

        
        <div className="dropdown">
    
            <div class="control">
				<div class="select">
					<select>
	                        	<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5 or more</option>
					</select>
				</div>
			</div>


        </div>
                    
                
                <br></br>
                <br></br>

        <div className="menu-label">Skills</div>

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}
            
            <br></br>
            <ul>

              <div className="form-group">
                
                <li>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.selectAll}
                >
                  Select All
                </button>
                </li>

                <br></br>

                <li>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={this.deselectAll}
                >
                  Deselect All
                </button>
                </li>

                <br></br>

                <li>
                <button type="submit" className="btn btn-primary">
                  Find
                </button>
                </li>
              </div>

            </ul>
            
            </form>
                
                
                <br></br>

                    <p className="menu-label">Rates</p>
                
  </div>

)
}
}

export default withRouter(FilterSidebar)

