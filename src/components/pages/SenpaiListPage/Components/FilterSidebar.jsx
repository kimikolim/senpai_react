import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import Checkbox from "./Checkbox"
import axios from 'axios'

const OPTIONS = {
    fitness: [" Gym", " Yoga", " Sports", " Others"],
    academia: [" Languages", " Computer Science", " School Subjects", " Others"],
    "arts&design": [" Instruments", " Sing/Dance", " Design & Crafts", " Others"],
    "cooking&baking": [" Cuisine", " Baking", " Mixology", " Others"],
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

  handleSearchKeyword(e) {
    e.preventDefault()
  }


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
      
      <form onSubmit={ e => { this.handleFormSubmit(e) } }>
        
        <br/>
        <p className="menu-label">Search by Keyword <i class="fas fa-filter"></i></p>

        <div class="field has-addons">
          <div class="control">
              <input class="input" type="text" placeholder="Input Skill Tags"/>
          </div>
        
        <br/>
          <div class="control">
            <a class="button is-info" onClick={ e => { this.handleSearchKeyword(e) } }>Search</a>
          </div>
        </div>
      
        <br/>        
      
        <p className="menu-label">Search by Filters <i class="fas fa-filter"/></p>
        
        <br/>
        
        <p className="menu-label">Years of Experience</p>

            <div className="dropdown">
              <div class="control">
                <div class="select">
                  <select defaultValue={this.state.experience} onChange={ e => this.performFilter(e, 'experience') }>
                    <option value ="">Years</option>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5 or more</option>
                  </select>
                </div>
              </div>
            </div>
                    
                
        <br/>        
        <br/>
      

        <div className="menu-label">Skill Sub-category</div>

          {this.createCheckboxes()}
            
        <br/>

        
        <div className="menu-label">Rates</div>

        <div className="control has-icons-left level-item">
          <input className="input" type="text" placeholder="Maximum Rate"/>

            <span className="icon is-small is-left">  
              <i className="fas fa-dollar-sign"></i>
            </span>
        </div>

          
          <div className="form-group">

            <span className="column has-text-centered">              
              <button type="submit" className="button is-primary mt-5" onClick={ e => { this. handleFormSubmit(e) } }>Filter</button>
            </span>
            
          </div>
        </form>
                
                
        <br/>

  </div>

)
}
}

export default withRouter(FilterSidebar)

