import { createSlice } from '@reduxjs/toolkit'

const tasks = createSlice({
    name: 'tasks',
    initialState: {
        taskList: []
    },
    reducers: {
        toggleTodo: (store, action) => {
            store.taskList.forEach((task) => {
                if (task.id === action.payload) {
                    task.isChecked = !task.isChecked
                }
            })
        },

        deleteTodo: (store, action) => {
            store.taskList.splice(action.payload, 1)
        },

        addTodo: (store, action) => {
            store.taskList.push(action.payload)
        },

        deleteAllTodos: (store) => {
            store.taskList = []
        },
        checkAllTodo: (store) => {
            store.taskList.forEach((task) => {
                task.isChecked = true
            })
        },
        unCheckTodo: (store) => {
            store.taskList.forEach((task) => {
                task.isChecked = false
            })
        }
    }
})

export default tasks;
