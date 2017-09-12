import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const App = ({ match }) => (
	<div>		
		<AddTodo />  
		<VisibleTodoList filter={match.params.filter || 'SHOW_ALL'} />	
		<Footer />	
	</div>
)

export default App