const myLibrary = [];

function Book(name,author,pages,isRead){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}


function addBookToLibrary(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const isRead = document.getElementById("isRead").checked;

     const newBook = new Book(name,author,pages,isRead);
     myLibrary.push(newBook);
     displayLibrary();
     
     document.querySelector(".form-container").reset();
     
  }

  function displayLibrary(){
    const libraryList = document.querySelector("#libraryList");
    libraryList.innerHTML='';

    myLibrary.forEach((book,index)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <strong>Name:</strong> ${book.name}<br>
        <strong>Author:</strong> ${book.author}<br>
        <strong>Pages:</strong> ${book.pages}<br>
        <strong></strong><button id="read-btn" onclick="readBook(${index})"> ${book.isRead ? 'Read' : 'Not Read'}</button><br>
        <strong><button id="remove-btn" onclick="removeBook(${index})">remove</button>
    `;
        libraryList.appendChild(listItem);
    })

  }
  function removeBook(index) {
    myLibrary.splice(index, 1); 
    displayLibrary(); 
}

  function readBook(index){
    myLibrary[index].isRead = !myLibrary[index].isRead;
    displayLibrary(); 
  }
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }