app.component("list-items", {
  template:
    /*html */
    `
    <div class="flex justify-center items-center min-h-screen bg-[#cbd7e3]">
        <div class="h-auto  w-96 bg-white rounded-lg p-4">
            <div class="mt-3 text-sm text-[#8ea6c8] flex justify-between items-center">
                <p class="set_date">Thursday 28 May</p>
                <p class="set_time">8:00 AM</p>
            </div>
            <p class="text-xl font-semibold mt-2 text-[#063c76]">To-do List</p>
            
            <ul class="my-4 ">
                <li class=" mt-4" id="1" v-for="todo in todos" :key="todo.id">
                    <div class="flex gap-3 w-full">
                        <div class="w-full h-12 bg-[#e0ebff] rounded-[7px] flex justify-start items-center px-3">
                            <span :class="{'green' : todo.completed == true }" @click="toggleCompleted(todo.id)" class=" w-7 h-7 bg-white rounded-full border border-white transition-all cursor-pointer hover:border-[#36d344] flex justify-center items-center" ><i class="text-white fa fa-check"></i></span>
                            <strike  :class="{'strike_none' : todo.completed == false }" class=" text-sm ml-4 text-[#5b7a9d] font-semibold"> {{todo.description}}</strike>
                        </div>
                        
                    </div>
                </li>
              
               
            </ul>
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


