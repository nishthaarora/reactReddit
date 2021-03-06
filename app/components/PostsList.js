import React from 'react';
import {ReactIntl} from 'react-intl';
import {FormattedDate} from 'react-intl';
import {FormattedTime} from 'react-intl';
import {IntlProvider} from 'react-intl';
import { Link } from 'react-router';
import axios from 'axios';

export default class PostsList extends React.Component {   
    // constructor() {
    //     super();
    //     this.state = {
    //         allComments: []
    //     }
    // }

    // handleClick(event) {
    //     event.preventDefault();
    //     axios.get('/posts/comments/' + this.props.post._id).then((res) => {
    //               console.log(res);
    //               res.data.post.comments.map((allComments) => {
    //                 self.setState({
    //                     allComments: allComments
    //                 })
    //             }) 
    //         })
    // }


    render() {
        return (
     <IntlProvider locale="en">
        <div>
            <h4>{this.props.post.title.toUpperCase()}</h4>
                <p>{this.props.post.content}</p>
                <p><strong>Belongs To:</strong> {this.props.post.community}</p>
                <p><strong>Published on: </strong> 
                    <FormattedDate value={this.props.post.created_at}
                        day="numeric"
                        month="long"
                        year="numeric" /> - 
                     <FormattedTime value={this.props.post.created_at} />
                </p>
                <p><strong>Author: </strong>{this.props.post.author.toUpperCase()}</p>
                <Link to={"comments/" + this.props.post._id } >Comments</Link>
                <hr />        
        </div>
     </IntlProvider>
        )
    }
}
