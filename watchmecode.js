
// // // recipe function 

// // function sayhi (person) {

// // 	console.log('hi', person)

// // }

// // sayhi ('gordon')

// // version 2 

// // displays todos
// var todos = ['item 2','item 3']

// function displayTodo() {
// 	console.log('my todos;', todos);
	
// }

// // add todo + parameters 

// function addTodo(todo){
// 	todos.push(todo);
// 	displayTodo();
// }

// //change todos

// function changeTodo(position, newValue) {
// todos[position] = newValue;
// displayTodo();
// }

// // delete todo
// function deleteTodo(position) {
// 	todos.splice(position,1);
// 	displayTodo();
// }


// // version 3


// var todolist = {
//   todos: ['item 1','item 2','item 3'],
//   displayTodos: function() {
//   	console.log('my todos',this.todos)
//   },

//   addTodo: function(todo){
//   	this.todos.push(todo);
//   	this.displayTodos();
//   },
//   changeTodo: function (position,newValue){
//   	this.todos[position] = newValue;
//   	this.displayTodos();
//   },
//   deleteTodo: function(position){
//   	this.todos.splice(position,1);
//   	this.displayTodos();
//   }
};


// version 4 booleans

// {
//   todoText:'item 1',
//   completed: false
// }


// var todolist = {
//   todos: [],
//   displayTodos: function() {
//     console.log('my todos',this.todos)
//   },

//   addTodo: function(todoText){
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function (position,todoText){
//     // this.todos[position] = newValue;
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position){
//     this.todos.splice(position,1);
//     this.displayTodos();
//   },

//   toggleCompleted: function(position){
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   }
// };


// version 5

// for looops



// for (var i =0; i < testarray.length; i++){
//   console.log('testarray[i]');
// };


// var testarray = ['item 1','item 2','item 3'];


var todolist = {
  todos: [],
  displayTodos: function() {
    console.log('my todos:');
    for (var i = 0; i < this.todos.length; i++){
      console.log(this.todos[i].todoText);
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


// if (this.todos.length ===0){
//   console.log('do stuff!!');
// } else{console.log('my todos:');
//     for (var i = 0; i < this.todos.length; i++){
//       console.log(this.todos[i].todoText);
//     }}


