import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory'
import './index.css';
import App from './js/components/App';
import Graph from './js/components/Graph';
import registerServiceWorker from './registerServiceWorker';

let routes = (
	<Router history={createHistory()}>
  	<div>
		  <Route path="/" component={App} />
	  </div>
	</Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
