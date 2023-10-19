let favDialog = document.querySelector("dialog");
let showDialog = document.querySelector("header>button");
let cancelDialog = document.querySelector("dialog button");
let bookName = document.getElementById("book-Name");
let authorName = document.getElementById("author-Name");
let readStatus = document.getElementById("readStatus");
let confirmButton = document.querySelector(".btn-confirm");
let bookList = document.querySelector(".bookList");

let myLibrary = [];

function Book(name, author, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary() {
  let bookInput = bookName.value;
  let authorInput = authorName.value;
  let readInput = readStatus.value;

  let addBook = new Book(bookInput, authorInput, readInput);
  let Bookadded = myLibrary.push(addBook);

  displayProperty();
}

showDialog.addEventListener("click", () => {
  favDialog.showModal();
});

cancelDialog.addEventListener("click", () => {
  favDialog.close();
});

confirmButton.addEventListener("click", () => {
  favDialog.close();

  return addBookToLibrary();
});

function displayProperty() {
  bookList.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const nameOfBook = document.createElement("p");
    nameOfBook.textContent = `Book Name:  ${book.name}`;
    const authorOfBook = document.createElement("p");
    authorOfBook.textContent = `Author Name:  ${book.author}`;
    const readStatus = document.createElement("p");
    readStatus.textContent = `Book Read:  ${book.isRead}`;
    const bookIndex = document.createElement("p");
    bookIndex.textContent = `Book Number:  ${index + 1}`;
    const removeCard = document.createElement("button");
    removeCard.classList.add("remove-btn");
    removeCard.textContent = "Remove";

    removeCard.addEventListener("click", () => {
      removeBook(index, bookCard);
    });

    bookCard.appendChild(nameOfBook);
    bookCard.appendChild(authorOfBook);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(bookIndex);
    bookCard.appendChild(removeCard);

    bookList.appendChild(bookCard);
  });
}

function removeBook(index, bookCard) {
  myLibrary.splice(index, 1);
  bookCard.remove();
}
