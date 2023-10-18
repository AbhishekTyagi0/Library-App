let myLibrary = [];

function Book(name, author, isRead) {
  this.name = name;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary() {
  let a = ("Enter the book name!");
  let b = ("Enter the author name!");
  let c = ("Enter the isRead status!");

  addBook = new Book(a, b, c);
  let Bookadded = myLibrary.push(addBook);

  addBook = " ";
  return Bookadded;
}

let x = addBookToLibrary();

console.log(x);

let favDialog = document.querySelector("dialog");
let showDialog = document.querySelector("header>button");
let cancelDialog = document.querySelector("dialog button");

showDialog.addEventListener("click", () => {
  favDialog.showModal();
});

cancelDialog.addEventListener("click", () => {
  favDialog.close();
});
