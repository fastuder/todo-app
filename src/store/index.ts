import Vue from 'vue'
import Vuex from 'vuex'
import { v4 as uuid } from "uuid";

const filterById = (i: any, _id: string) => {
  return i.id === _id;
}

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    todos: [],
    showNewTodoDialog: false
},
  mutations: {
    addTodo(state, _title: string) {
      state.todos.push({
        id: uuid(),
        title: _title
      });
    },
    deleteTodo(state, _id: string) {
      const todos = state.todos;
      const deleteTodo = todos.find((element) => element.id == _id);
      todos.splice(todos.indexOf(deleteTodo), 1);
  
    },
    toggleNewTodoDialog(state) {
      state.showNewTodoDialog = !state.showNewTodoDialog;
    }
  },
  actions: {
    addTodo(context, title: string) {
      context.commit("addTodo", title);
    },
    deleteTodo(context, id: string) {
      context.commit("deleteTodo", id);
    },
    toggleNewTodoDialog(context) {
      context.commit("toggleNewTodoDialog");
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    },
    showNewTodoDialog(state) {
      return state.showNewTodoDialog;
    }
  },
  modules: {
  }
})
export default store