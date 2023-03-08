app.component("list-items", {
  template:
    /*html */
    `
         <div>
            <div v-for="(todo) in todos" class="flex mb-4 items-center">
              <p class="w-full text-grey-darkest">
                {{todo.description}}
              </p>
              <button v-if="todo.completed == false" @click="toggleCompleted(todo.id)" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              >
                Done
              </button>
               <button v-else @click="toggleCompleted(todo.id)"
                class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
              >
                Not Done
              </button>
              <button
                class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
              @click="removeItem(todo.id)">
                Remove
              </button>
            </div>
            
          </div>
    `,
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    removeItem(id) {
      this.$emit("remove-todo", id);
    },
    toggleCompleted(id) {
      this.$emit("toggle-completed", id);
    },
  },
});
