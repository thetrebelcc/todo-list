<!DOCTYPE html>
<html>
<head>
	<title>
		
	</title>

</head>
<body>


<h1>Todolist</h1>

<div>
	<button onclick="handlers.displayTodos()">Display Todos</button>
	<button onclick="handlers.toggleALL()">Toggle All</button>
</div>

<div>
	<button onclick="handlers.addTodo()">Add to do </button>
	<input id ="addTodoTextInput" type="text">
</div>

<div>
	<button onclick="handlers.changeTodo()">Change</button>
	<input id="changeTodoPositionInput" type="number" >
	<input id="changeTodoTextInput" type="text"  >
</div>	

<div>
	<button onclick="handlers.deleteTodo()">Delete</button>
	<input id="deleteTodoPositionInput" type="number" >
</div>

<div>
	<button onclick="handlers.toggleCompleted()">Toggle Completed</button>
	<input id ="toggleCompletedPositionInput" type="number" >
</div>

<ul>
	</ul>



	<script src=version6.js></script>
</body>
</html>