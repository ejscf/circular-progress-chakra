import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '../pages/Home.js'

function Routes() {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home}/>
			</Switch>
		</BrowserRouter>
	)
}

export { Routes }