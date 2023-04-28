const form = document.forms.todoForm;
const input = form.elements.inputTodo;
const listTodo = document.querySelector(".list");
const listBtn = document.querySelectorAll(".list-btn button");
const todoList = [];

form.addEventListener("submit", function (event) {
    event.preventDefault();
    getInput();
    console.log(todoList);
    input.value = "";
});

function getInput() {
    const userInput = input.value;
    if (input !== "" && input !== null) {
        todoList.push(userInput);
        todoView(userInput);
    } else {
        alert("Todo belum di isi");
    }
}

function todoView(newInput) {
    const li = document.createElement("li");
    const text = document.createTextNode(newInput);
    const todoText = document.createElement("span");
    const btnWrap = document.createElement("span");

    btnWrap.classList = "list-btn";

    const hapusBtn = document.createElement("button");
    hapusBtn.setAttribute("type", "button");
    hapusBtn.setAttribute("id", "hapus-btn");
    hapusBtn.textContent = "Hapus";

    const ubahBtn = document.createElement("button");
    ubahBtn.setAttribute("type", "button");
    ubahBtn.setAttribute("id", "ubah-btn");
    ubahBtn.textContent = "Ubah";

    todoText.addEventListener("click", function (e) {
        e.target.classList.toggle("selesai");
    });

    hapusBtn.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
    });

    ubahBtn.addEventListener("click", function (e) {
        const text =
            e.target.parentElement.parentElement.firstChild.textContent;
        const index = todoList.indexOf(text);

        if (index > -1) {
            const newInput = prompt("Masukkan todo baru", text);
            if (newInput !== null && newInput !== "") {
                todoList[index] = newInput;
                const todoText =
                    e.target.parentElement.parentElement.firstChild;
                todoText.textContent = newInput;
            }
        }
    });

    todoText.appendChild(text);
    li.appendChild(todoText);

    btnWrap.appendChild(hapusBtn);
    li.appendChild(btnWrap);

    btnWrap.appendChild(ubahBtn);
    li.appendChild(btnWrap);

    listTodo.appendChild(li);
}
