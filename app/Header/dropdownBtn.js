import React from 'react';
import { hashHistory } from 'react-router';

export default class DropdwnBtn extends React.Component {  
    constructor(props){
        super(props);
        this.state = {
		    value: "Select an option"
		}
    }

    handleChange(event) {
        this.setState({value: event.target.value}, () => {
            hashHistory.push( '/' + this.state.value );
        });
	}

    render() {  
    
      return(        
           <select onChange={this.handleChange.bind(this)}>
           <option value={this.state.value}>{this.state.value}</option>   
            {this.props.data.map(function(ele, i) {
                return <option key={i} value={ele.community}>{ele.community}</option>;
            })}
            </select>	
        )
    }
}
