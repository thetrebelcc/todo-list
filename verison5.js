var todolist = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length ===0){
      console.log('empty');
    }
    else {
      console.log('my todo');
      for (var i =0; i < this.todos.length; i++) {
if(this.todos[i].completed === true){
    console.log('(X)',this.todos[i].todoText);
} else{
  console.log('()', this.todos[i].todoText);
}

      }
    }
  },

  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function (position,todoText){
    // this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodos();
  },

  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

if(this.todos[i].completed === true){
    console.log('(X)',this.todos[i].todoText);
} else
{  console.log('()', this.todos[i].todoText);
}