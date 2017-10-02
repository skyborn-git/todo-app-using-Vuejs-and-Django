import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

const debug = process.env.NODE_EVN !== 'production'

// api end point
const API_END_POINT = 'http://localhost:8000/todos/'

// mutation
const mutations = {
  [types.GET_TODOS] (state, { items }) {
    state.todos = items
  },
  [types.ADD_TODO] (state, { item }) {
    state.todos.push(item)
  },
  [types.EDIT_TODO] (state, id) {
    state.editTodoId = id
  },
  [types.UPDATE_TODOS] (state, { item }) {
    const record = state.todos.find(p => p.id === item.id)
    if (record) {
      record.name = item.name
      record.description = item.description
    }
  },
  [types.DELETE_TODO] (state, { id }) {
    const record = state.todos.findIndex(p => p.id === id)
    if (record >= 0) {
      state.todos.splice(record, 1)
    }
  }
}
// state
const state = {
  todos: [],
  editTodoId: ''
}

// actions
const actions = {
  fetchTodos ({ commit }) {
    Vue.http.get(API_END_POINT)
    .then(response => {
      commit(types.GET_TODOS, {
        items: response.body.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  addTodo ({ commit, state }, todo) {
    Vue.http.post(API_END_POINT, todo)
    .then(response => {
      commit(types.ADD_TODO, {
        item: response.body
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  editTodo ({ commit, state }, todo) {
    Vue.http.put(API_END_POINT + state.editTodoId + '/', todo)
    .then(response => {
      commit(types.UPDATE_TODOS, {
        item: response.body
      })
    })
    .catch(error => {
      console.log(error)
    })
  },
  deleteTodo ({ commit }, id) {
    Vue.http.delete('http://localhost:8000/todos/' + id + '/')
    .then(response => {
      commit(types.DELETE_TODO, { id })
      console.log('item deleted successfully!!')
    })
    .catch(error => {
      console.log(error)
    })
  }
}

// getters
const getters = {
  getTodos: state => state.todos,
  getEditTodoId: state => state.editTodoId
}

// one store for entire application
export default new Vuex.Store({
  state,
  strict: debug,
  getters,
  actions,
  mutations
})

