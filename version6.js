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
  changeTodo: function (position ,todoText){
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
  },

  toggleALL: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0; 

    for (var i = 0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }

  if( completedTodos === totalTodos){
      for (var i =0; i < totalTodos; i++){
        this.todos[i].completed = false;
      } }
      else {
        for (var i = 0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }
     
    this.displayTodos();
}

}; 

// // var displayTodosButton = document.getElementById('btn1');
// // var toggleALL = document.getElementById('btn2')
// // console.log('im working');
// // displayTodosButton.addEventListener('click', function() {


// //  todolist.displayTodos();

// // });

// toggleALL.addEventListener('click', function(){
//   todolist.toggleALL();
// });

var handlers = {
    displayTodos: function() {

 todolist.displayTodos();

},

toggleALL:  function(){
  todolist.toggleALL();
},

addTodo: function(){
 var addTodoTextInput = document.getElementById('addTodoTextInput');
 todolist.addTodo(addTodoTextInput.value);
 addTodoTextInput.value ='';
},
changeTodo: function(){ 
var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
var changeTodoTextInput = document.getElementById('changeTodoTextInput');
todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
changeTodoPositionInput.value = '';
changeTodoTextInput.value ='';
},

deleteTodo: function(){
  var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
  todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
  deleteTodoPositionInput.value ='';
},

toggleCompleted: function(){
  var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
  todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
  toggleCompletedPositionInput.value ='';
}


};


var view = {
displayTodos: function(){
  var todoUl = document.querySelector('ul');
  var todoLi = document.createElement('li');
  todoUl.appendChild(todoLi);
}

};

changeTodoPositionInput
changeTodoTextInput
deleteTodoPositionInput
toggleCompletedPositionInput


