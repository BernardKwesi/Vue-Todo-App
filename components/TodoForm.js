app.component("todo-form", {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  template:
    /*html */
    `
        <form @submit.prevent="onSubmit">
               <input
                class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo" v-model="description" id="description"
              />
              <button type="submit"
                class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
              >
                Add
              </button>
         
        </form>
    `,
  data() {
    return {
      description: "",
    };
  },
  methods: {
    onSubmit() {
      let todo = {
        id: this.id,
        description: this.description,
        completed: false,
      };

      this.$emit("add-todo", todo);

      this.description = "";
    },
  },
});
