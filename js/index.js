import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../reducers/index'
import Root from '../components/Root'

let store = createStore(todoApp)

render(<Root store={store}/>, document.getElementById('root'))