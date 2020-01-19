document.getElementById("button1").addEventListener("click", getExternal);

// Get api
function getExternal() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = "";
      data.forEach(function(todo) {
        output += `<ul>
        <h2>${todo.title}</h2>
        <li>User ID: ${todo.userId}</li>
        <li>ID: ${todo.id}</li> 
        <li>Completed: ${todo.completed}</li><br><button>Delete</button></ul>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    });
}
function removeItem() {
  var elem = document.getElementById("output");
  elem.parentNode.removeChild(elem);
  return false;
}
