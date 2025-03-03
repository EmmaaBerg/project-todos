import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import tasks from 'reducers/Tasks'

import { Header } from 'components/Header'
import AddTodo from 'components/AddToDo'
import TodoCounter from 'components/TodoCounter'
import TodoList from 'components/TodoList'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({
  reducer
})


export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <TodoCounter />
      <TodoList />
    </Provider>
  )
}
