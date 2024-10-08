const myLibrary = [];

function Book(name,author,pages,isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToLibrary() {
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

     const newBook = new Book(name,author,pages,isRead);
     myLibrary.push(newBook);
     displayLibrary();
     
     document.getElementById("myForm").reset();
     closeForm();
  }

  function displayLibrary(){
    const libraryList = document.querySelector("#libraryList");
    libraryList.innerHTML='';

    myLibrary.forEach((book)=>{
        const listItem = document.createElement('li');
        listItem.textContent = `${book.name} by ${book.author}, ${book.pages} pages. ${book.isRead ? 'Read' : 'Not Read'}`;
        libraryList.appendChild(listItem);
    })

  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }