let myLibrary = [];

const bookContainer = document.querySelector("#book-container");
const addBookBtn = document.getElementById("add-book");

function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

let book0 = new book("The Hobbit", "J.R.R Tolkien", true);
let book1 = new book("Lord of the Rings", "J.R.R Tolkien", true);

myLibrary = [book0, book1];

const createBookDiv = function (book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.textContent = `${book.title} by ${book.author}`;
    bookDiv.id = "book" + myLibrary.indexOf(book);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "X";

    bookContainer.appendChild(bookDiv);
    bookDiv.appendChild(removeBtn);
}

const loadBooks = function() {
    myLibrary.forEach(element => {
        createBookDiv(element);
    });
}

bookContainer.onload = loadBooks();

document.onload = addBookBtn.addEventListener("click", function(){
    addBook();
});

function addBook() {

    let read;
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    if (document.getElementById("read").value == "on")
        read = true;
    else
        read = false;

    myLibrary.push(new book(title, author, read));
    createBookDiv(myLibrary[myLibrary.length-1])
    
}