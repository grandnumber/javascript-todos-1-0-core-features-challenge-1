var returnMeAnewTodoList = function() {
    return {
    todos: [],
    name: "Mikey mofo",
    add: function(task_string){
      var task = {name: task_string, complete:false}
      this.todos.push(task);
    },
    secondName: "Janet mofo",
    remove: function(task){
      var task_index=this.todos.indexOf(task);
      delete this.todos[task_index];
    },

    list: function(task){
      var task_index =this.todos.indexOf(task);
      this.todos[task_index].complete=true
    },

    print: function(){
      this.todos.forEach(function(todo){
        console.log(todo.name, "complete: " + todo.complete);
      })
    },

  };
};





var todoList = returnMeAnewTodoList();

todoList.add("buy stuff")
todoList.add("sell stuff")
todoList.add("pack stuff")
todoList.add("learn stuff")
// Driver code

 // add: function(task){
 //      this.todos.push(task);
 //    },
