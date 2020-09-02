console.log("CONNECTED")

var todos = [];

var input = prompt("What would you like to do?");


while(input !== "quit"){
    if(input == "list"){
        listTodos();
    } else if (input == "new"){
        addTodo();
    }else if (input == "delete"){
        deletTodo();
    }
    input = prompt("What would you like to do?");
}

console.log("OK, APP TERMINATES");

function listTodos(){
    todos.forEach(function(todo, i){
        console.log(i + ': ' + todo);
    })
}

function addTodo(){
    var newTodo = prompt("Enter a new Todo");
    todos.push(newTodo);
}

function deleteTodo(){
    var index = prompt("Enter the index of todo to be deleted");
    todos.splice(index, 1);
}
