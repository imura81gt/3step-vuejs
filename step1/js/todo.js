var app = new Vue({
  el: '#todoApp',
  data: {
    title: "Welcom to Vue.js",
    fontStyle: {
    },
    todo: "",
    todos: [],
  },
  methods: {
    addTodo: function(){
      this.todos.push({
        name: this.todo,
        doing: false
      })
      this.todo = ""
    },
    begin: function(index){
      console.log(this.todos[index].doing)
      this.todos[index].doing = !this.todos[index].doing;
    }
  }

})
