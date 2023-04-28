const form = document.querySelector('form[name="todoForm"]');
const inputTodo = document.querySelector('input[name="inputTodo"]');
const listTodo = document.querySelector(".list");
const todoList = [];

form.addEventListener("submit", handleSubmit);
listTodo.addEventListener("click", handleListClick);

function handleSubmit(event) {
    event.preventDefault();
    const userInput = inputTodo.value.trim();
    if (userInput === "") {
        showError("Todo belum di isi");
    } else {
        addTodoToList(userInput);
        inputTodo.value = "";
    }
}

function addTodoToList(todo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = todo;
    li.appendChild(span);

    const btnWrap = document.createElement("span");
    btnWrap.classList.add("list-btn");

    const hapusBtn = document.createElement("button");
    hapusBtn.setAttribute("type", "button");
    hapusBtn.setAttribute("data-action", "hapus");
    hapusBtn.textContent = "Hapus";
    btnWrap.appendChild(hapusBtn);

    const ubahBtn = document.createElement("button");
    ubahBtn.setAttribute("type", "button");
    ubahBtn.setAttribute("data-action", "ubah");
    ubahBtn.textContent = "Ubah";
    btnWrap.appendChild(ubahBtn);

    li.appendChild(btnWrap);
    listTodo.appendChild(li);

    todoList.push(todo);
}

function handleListClick(event) {
    if (event.target.tagName === "BUTTON") {
        const action = event.target.getAttribute("data-action");
        const li = event.target.closest("li");
        const span = li.querySelector("span");

        if (action === "hapus") {
            li.remove();
            todoList.splice(todoList.indexOf(span.textContent), 1);
        } else if (action === "ubah") {
            const newTodo = prompt("Masukkan todo baru", span.textContent);
            if (newTodo !== null && newTodo !== "") {
                span.textContent = newTodo;
                todoList.splice(todoList.indexOf(span.textContent), 1, newTodo);
            }
        }
    } else if (event.target.tagName === "SPAN") {
        event.target.classList.toggle("selesai");
    }
}

function showError(message) {
    alert(message);
}
