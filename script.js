let myLibrary = [];

const bookContainer = document.querySelector("#book-container");

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

function addBook() {
    
}
