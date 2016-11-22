import React from 'react';

// Returns a Project object showing its title, image/link, and description.
var Project = React.createClass({
    render() {
		return(      
			<div className='project'>	
				<div className='card-panel'>			
					<h4>{this.props.title}</h4>
					<img src={'imgs/' + this.props.img} alt={this.props.title + ' page screenshot'} />
					<div className='content'>
						<p>{this.props.description}</p>
						<a target='_blank' href={this.props.url}>Link to project</a>
					</div>					
				</div>					
			</div>
        )
    }
});

export default Project;
