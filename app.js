const app = Vue.createApp({
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    toggleComplete(id){
      let todo = this.todos.find(todo => todo.id === id);
      todo.completed = !todo.completed;
      
    },
  },
});
