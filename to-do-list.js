<!DOCTYPE html>
<html>
<head>
  <title>To Do List</title>
</head>
<body>

<h2>To Do List</h2>
<input type="text" id="taskInput" placeholder="Tambah tugas...">
<button onclick="addTask()">Tambah</button>

<ul id="taskList"></ul>

<script>
function addTask() {
  let input = document.getElementById("taskInput");
  let li = document.createElement("li");

  li.textContent = input.value;

  li.onclick = function() {
    li.style.textDecoration = "line-through";
  };

  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.onclick = function() {
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
</script>

</body>
</html>
