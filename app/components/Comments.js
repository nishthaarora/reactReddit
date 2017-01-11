import React from 'react';
import axios from 'axios';

export default class Comments extends React.Component { 

        constructor() {
            super();
            this.state = {
                comment:"",
                allComments: []
            }
        }

        componentDidMount() {
            this.getComments();
        }
        handleChange(event) {
            this.setState({comment: event.target.value})
        }

        handleSubmit(event) {
            event.preventDefault();
            let self = this;
            axios.post('create/comments/'+ this.props.params.id, {value: this.state.comment}).then((res) => { 
                if(res) {
                    self.setState({
                        allComments: res.data.comments
                    })
                }       
            })
        }

        
        getComments() {
            let self = this;
            axios.get('/posts/comments/' + this.props.params.id).then((res) => {
                self.setState({
                    allComments: res.data.post.comments
                })
            })
        }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="exampleTextarea">Example textarea</label>
                        <textarea onChange={this.handleChange.bind(this)} className="form-control" id="exampleTextarea" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <AllComments comm={this.state.allComments} ></AllComments>
            </div>
      )
    }
}

const AllComments = (props) => {
    return (
        <ul>
            {props.comm.map((ele, i) => {
                return <li key={ i }>{ele}</li>;
            })}
            
        </ul>
    );    
}