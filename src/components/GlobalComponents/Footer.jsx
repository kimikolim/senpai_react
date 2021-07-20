import React, { Component } from 'react'

const currentYear = new Date ().getFullYear()

export class Footer extends Component {
    render() {
        return (

            <div>
                <section className="footer has-text-centered">
                    
                    <p>
                        Call Me Senpai © {currentYear}
                    </p>
                </section>
            </div>
        
        )
    }
}

export default Footer
