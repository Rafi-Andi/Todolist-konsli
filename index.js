const inputTodo = document.getElementById("input-todo");
const tambahBTN = document.getElementById("btntambah-todo");
const content = document.getElementById("content");

inputTodo.focus();

tambahBTN.addEventListener("click", () => {
  if (inputTodo.value.trim() !== "") {
    const todo = document.createElement("div");
    todo.classList.add("todo");
    todo.innerHTML = `
            <h4>${inputTodo.value}</h4>
                        <div>
              <input
                type="button"
                value="Edit"
                id="btnEdit-todo"
                style="
                  border: none;
                  outline: none;
                  padding: 5px 20px;
                  border-radius: 5px;
                  background-color: blue;
                  color: white;
                  font-weight: 600;
                "
              />
              <input
                type="button"
                value="Delete"
                id="btnDelete-todo"
                style="
                  border: none;
                  outline: none;
                  padding: 5px 20px;
                  border-radius: 5px;
                  background-color: red;
                  color: white;
                  font-weight: 600;
                "
              />
            </div>
        `;
    content.append(todo);
    inputTodo.value = "";
    inputTodo.focus();
  } else {
    alert("tidak boleh kosong");
  }
});
