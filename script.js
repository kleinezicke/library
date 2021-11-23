let myLibrary = [];
const storage = localStorage;

const bookContainer = document.querySelector("#book-container");
const addBookBtn = document.getElementById("add-book");

function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

let book0 = new book("The Hobbit", "J.R.R Tolkien", false);

const createBookDiv = function (book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.textContent = `${book.title} by ${book.author}`;
    bookDiv.id = "book" + myLibrary.indexOf(book);

    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn");
    readBtn.id = "read" + myLibrary.indexOf(book);
    readBtn.textContent = "Read";
    if (book.read == true) {
        readBtn.classList.add("read");
    }
    readBtn.addEventListener("click", function(){
        changeRead(readBtn.id);
    })

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.id = "del" + myLibrary.indexOf(book);
    removeBtn.textContent = "X";
    removeBtn.addEventListener("click", function() {
        removeBook(removeBtn.id);
    })

    bookContainer.appendChild(bookDiv);
    bookDiv.appendChild(readBtn);
    bookDiv.appendChild(removeBtn);
}

const loadBooks = function() {
    myLibrary.forEach(element => {
        createBookDiv(element);
    });
}

bookContainer.onload = loadLibrary();

document.onload = addBookBtn.addEventListener("click", function(){
    addBook();
});

function addBook() {

    let read;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    if (document.getElementById("read").checked == true)
        read = true;
    else
        read = false;

    myLibrary.push(new book(title, author, read));
    createBookDiv(myLibrary[myLibrary.length-1])

    saveLibrary(myLibrary);
}

function removeBook(delId) {
    let button = document.getElementById(delId)
    let parent = button.parentNode;
    let id = delId.slice(3);

    bookContainer.removeChild(parent);
    myLibrary.splice(id, 1);

    saveLibrary(myLibrary);
}

function changeRead(readId) {
    let button = document.getElementById(readId);
    let index = readId.slice(4);

    if (myLibrary[index].read == false) {
        myLibrary[index].read = true;
        button.classList.add("read")
    }
    else {
        myLibrary[index].read = false;
        button.classList.remove("read");
    }

    storage.setItem(`read${index}`, myLibrary[index].read)
}

function saveLibrary(library) {

    storage.clear()

    library.forEach(element => {
        let index = library.indexOf(element);
        storage.setItem(`title${index}`, element.title);
        storage.setItem(`author${index}`, element.author);
        storage.setItem(`read${index}`, element.read);
    });
}

function loadLibrary() {

    for(i = 0, l = storage.length / 3; i < l; i++) {
        let author = storage.getItem(`author${i}`);
        let title = storage.getItem(`title${i}`);
        let read = storage.getItem(`read${i}`);

        myLibrary.push(new book(title, author, read));
    }

    myLibrary.forEach(element => {
        createBookDiv(element);
    })
}