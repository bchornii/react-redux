/*import { createStore } from 'redux'
import todoApp from '../reducers/reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'
// ------------------------------------
// test
import TodoList from '../components/TodoList'
// ------------------------------------

let store = createStore(todoApp)

// initial state
console.log(store.getState())

let unsubsribe = store.subscribe(() => console.log(store.getState()))

// dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))

store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))

store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubsribe()*/

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers/reducers'
import App from '../components/App'

let store = createStore(todoApp)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)