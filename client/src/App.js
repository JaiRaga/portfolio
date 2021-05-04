import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// redux store
import store from './redux/store'

const App = () => {
	return (
		<Provider store={store}>
			<Router></Router>
		</Provider>
	)
}

export default App
