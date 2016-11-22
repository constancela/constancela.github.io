// Page of resume items to show
import React from 'react';
import Baby from 'babyparse';
import $ from 'jquery';
import ResumeItem from './ResumeItem';

// ResumePage Component
var ResumePage = React.createClass({
	getInitialState(){
		return{resumeItems:[]}
	},

	// When component mounts, get the data and set the state of 'resumeItems'
	componentDidMount(){
		$.get('data/resume.csv').then(function(data) {
			var parsed = Baby.parse(data, {header:true});
			this.setState({resumeItems:parsed.data})
		}.bind(this));
		
		$('#resume').animate({opacity: '1'}, "slow");
	},
	
	// Render a <ResumeItem> element for each element in the state
	render() {
		return (
			<div className='container' id='resume'>
				{this.state.resumeItems.map(function(item, i) {
						return <ResumeItem key={'item-' + i} title={item.title} position={item.position} description={item.description} date={item.date} />
					})}
			</div>
		);
	}
});

export default ResumePage;
