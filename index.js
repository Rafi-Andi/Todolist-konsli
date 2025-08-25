const inputTodo = document.getElementById("input-todo");
const tambahBTN = document.getElementById("btntambah-todo");
const content = document.getElementById("content");

console.log(content);
inputTodo.focus();

tambahBTN.addEventListener("click", () => {
  if (inputTodo.value.trim() !== "") {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const spanText = document.createElement("span");
    spanText.textContent = inputTodo.value;

    const divButton = document.createElement("div");

    const editButton = document.createElement("button");
    editButton.classList.add("btn-edit");
    editButton.textContent = "Edit";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn-delete");
    deleteButton.textContent = "Delete";

    editButton.addEventListener("click", () => {
      inputTodo.value = spanText.textContent;
      console.log(spanText.textContent);
      tambahBTN.value = "Update";
      tambahBTN.style.backgroundColor = "green";

      tambahBTN.addEventListener("click", () => {
        spanText.textContent = inputTodo.value;
        todo.remove();

        tambahBTN.value = "Tambah";
        tambahBTN.style.backgroundColor = "blue";
      });
    });

    deleteButton.addEventListener("click", () => {
      todo.remove();
    });

    divButton.append(editButton, deleteButton);

    todo.append(spanText, divButton);
    content.append(todo);
    inputTodo.value = "";
    inputTodo.focus();
  } else {
    alert("tidak boleh kosong");
  }
});
