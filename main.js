index = 1;
function showAddNew() {
    document.getElementById('newBook').style.display = 'block';
    document.getElementById('addNewBook').style.display = 'none';
}
class Books {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    addBook() {


        let newBook = document.createElement("tr");

        /* let r = document.createElement("td");
        let rowNum = document.createTextNode(this.rowNumber);
        r.appendChild(rowNum); */

        let t = document.createElement("td");
        let titleText = document.createTextNode(this.title);
        t.appendChild(titleText);

        let a = document.createElement("td");
        let authorText = document.createTextNode(this.author);
        a.appendChild(authorText);

        let i = document.createElement("td");
        let isbnText = document.createTextNode(this.isbn);
        i.appendChild(isbnText);

        let e = document.createElement("td");
        let editBtn = document.createElement("button");
        editBtn.appendChild(document.createTextNode("Edit"));
        editBtn.onclick = this.editBook;
        editBtn.className = 'btn btn-info';
        e.appendChild(editBtn);

        let d = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.appendChild(document.createTextNode("Delete"));
        delBtn.onclick = this.deleteBook;
        delBtn.className = 'btn btn-info';
        d.appendChild(delBtn);

        //newBook.appendChild(r);
        newBook.appendChild(t);
        newBook.appendChild(a);
        newBook.appendChild(i);
        newBook.appendChild(e);
        newBook.appendChild(d);

        document.getElementById("bookList").appendChild(newBook);

    }
    editBook() {
        document.getElementById('newBook').style.display = 'block';
        document.getElementById('addNewBook').style.display = 'none';

        let preTitle = this.parentElement.parentElement.childNodes[0];
        document.getElementById('title').value = preTitle.innerHTML;

        let preAuthor = this.parentElement.parentElement.childNodes[1];
        document.getElementById('author').value = preAuthor.innerHTML;

        let preISBN = this.parentElement.parentElement.childNodes[2];
        document.getElementById('isbn').value = preISBN.innerHTML;

        document.getElementById('save').innerHTML = 'Save Changes';

        document.getElementById('save').onclick = function () {
            preTitle.innerHTML = document.getElementById('title').value;
            preAuthor.innerHTML = document.getElementById('author').value;
            preISBN.innerHTML = document.getElementById('isbn').value;

            document.getElementById('title').value = "";
            document.getElementById('author').value = "";
            document.getElementById('isbn').value = "";
            document.getElementById('save').onclick = submitFunc;
            document.getElementById('save').innerHTML = 'Save';
            document.getElementById('newBook').style.display = 'none';
            document.getElementById('addNewBook').style.display = 'block';
        };


    }
    deleteBook() {

        this.parentElement.parentElement.remove();


    }
}

function submitFunc() {

    bookTitle = document.getElementById('title').value;
    bookAuthor = document.getElementById('author').value;
    bookISBN = document.getElementById('isbn').value;

    if (bookTitle == "" || bookISBN == "" || bookAuthor == "") {
        window.alert("Fill the inputs");
    }
    else {
        localStorage.setItem("Title", bookTitle);
        localStorage.setItem("author", bookAuthor);
        localStorage.setItem("isbn", bookISBN);

        mybook = new Books(bookTitle, bookAuthor, bookISBN);
        mybook.addBook();
    }
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";

    document.getElementById('newBook').style.display = 'none';
    document.getElementById('addNewBook').style.display = 'block';
}