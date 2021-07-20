import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import SenpaiCard from './SenpaiCard'

function handleClick() {
    console.log("clicked")
}

export class FilterSidebar extends Component {
    render() {
        return (

<div>

        <p class="menu-label is-hidden-touch">Navigation <i class="fas fa-compass"></i></p>
        
            <ul class="menu-list">
                    
                        <li>
                            <Link to="/" class="">
                                <span class="icon"><i class="fa fa-home"></i></span> Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/catalog" class="">
                                <span class="icon"><i class="fas fa-th-large"></i></span> Categories
                            </Link>
                        </li>
                    
                    </ul>
                
                <br></br>
                
                
        <p class="menu-label">Filters <i class="fas fa-filter"></i></p>
                
                <br></br>
                
                    <p className="menu-label">Years of Experience</p>

        
        <div className="dropdown">
  

            <div className="dropdown-trigger">
                <button onClick={handleClick} className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Years</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                </button>
            </div>
    
    
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                
                <div className="dropdown-content">
                    
                    <a href="#" class="dropdown-item">
                    Overview
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Modifiers
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Grid
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Form
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Elements
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Components
                    </a>
        
                    <a href="#" class="dropdown-item">
                    Layout
                    </a>
                
                </div>
            
            </div>

        </div>
                    
                
                <br></br>
                <br></br>

                    <p className="menu-label">Skills</p>
                        
                    <ul>
                    
                        <li>
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Asian
                            </label>
                        </li>

                        
                        <li>
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Western
                            </label>
                        </li>
                    
                    
                        <li>
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Fine Dining
                            </label>
                        </li>


                        <li>
                            <label class="checkbox">
                                <input type="checkbox"></input>
                                Others
                            </label>
                        </li>

                    </ul>
                
                
                <br></br>

                    <p className="menu-label">Rates</p>
                
  </div>

)
}
}

export default FilterSidebar

