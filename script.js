let myLibrary = [];

const bookContainer = document.querySelector("#book-container");

function book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
}

let book0 = new book("The Hobbit", "J.R.R Tolkien", true);

myLibrary = [book0];

const createBookDiv = function (book) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.textContent = `${book.title} by ${book.author}`;
    bookContainer.appendChild(bookDiv);
}

const loadBooks = function() {
    myLibrary.forEach(element => {
        createBookDiv(element);
    });
}

bookContainer.onload = loadBooks();

