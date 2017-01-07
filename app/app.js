import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Form from './components/Form';
import Main from './components/Main';
import SubRedditData from './components/SubRedditData';
import Comments from './components/Comments'

var App = document.getElementById('app');

ReactDom.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="create" component={Form}></Route>
            <IndexRoute component={Main}></IndexRoute>
            <Route path="comments/:id" component={Comments}></Route>
            <Route path="/:subredditId" component={SubRedditData}></Route>
        </Route>
    </Router>, App
);
