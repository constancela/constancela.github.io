import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import './css/index.css';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import ResumePage from './ResumePage';

// Render DOM
ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={App}>
				<IndexRoute component={HomePage}/>
                <Route path='home' component={HomePage}/>
                <Route path='projects' component={ProjectPage}/>
				<Route path='resume' component={ResumePage}/>
            </Route>
        </Router>,
  document.getElementById('root')
);
