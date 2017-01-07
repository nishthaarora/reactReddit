import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component { 

        constructor() {
            super();
            this.state = {
                comment:""

            }
        }

        handleChange(event) {
            this.setState({comment: event.target.value})
        }

        handleSubmit(event) {
            event.preventDefault();
            axios.post('posts/comments/'+ this.props.params.id, {value: this.state.comment}).then((res) => {
                console.log(res);
            })
        }
        

    render() {
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="exampleTextarea">Example textarea</label>
                    <textarea onChange={this.handleChange.bind(this)} className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
      )
    }
}
