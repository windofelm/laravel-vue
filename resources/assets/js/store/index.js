import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store;
export default store = new Vuex.Store({
    state: {
      todos: [
        { id: 1, text: 'TODO 01', done: true },
        { id: 2, text: 'TODO 02', done: false }
      ],
      users: []
    },
    getters: {
      doneTodos: state => {
        return state.todos.filter(todo => todo.done)
      },
      allTodos: state => {
        return state.todos;
      },
      getUsers: state => {
        return state.users;
      },
    },
    mutations: {
        unshiftTodo (state) {
          state.todos.unshift({
            id: 3, 
            text: 'TODO 05', 
            done: true
          });
        },
        fetchUsers (state, users) {
            console.log("Mutation:", users[0].name);
            state.users = users;
        },
    },
    actions: {
        unshiftTodo (context) {
          context.commit('unshiftTodo')
        },
        getUsers (context) {
            axios.get("users").then(function(response){
                context.commit('fetchUsers', response.data)
            });
          },
      }
})