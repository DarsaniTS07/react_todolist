import React from 'react';
import './App.css';

function App() {
  var ul = document.getElementById("listcon")
        var input = document.getElementById("input")

        function add() {
            var listitem = document.createElement("li")
            listitem.innerHTML = input.value + "<button onclick='delitem(event)'>Delete</button>"
            ul.append(listitem)
        }
        function delitem(event) {
            event.target.parentElement.remove()

        }

  return (
    <div>
      <link src="stylesheet" href="App.css" /> 
    <center>
        <div class="content">
            <h2>TO DO LIST</h2>

            <input id="input" />
            <button onclick="add()">+</button>
            <ul id="listcon">
                <li>Hello
                    <button onclick="delitem(event)">Delete</button>
                </li>
            </ul>

        </div>
    </center>
    <script src="index.js"></script>
</div>

  );
}

export default App;
