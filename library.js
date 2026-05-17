const myLibrary= [];
function Book(name, author, numberOfPages, readStatus){
    this.name= name;
    this.author=author;
    this.numberOfPages=numberOfPages;
    this.readStatus= readStatus;
}
function AddToLibrary(Book){
    Book.id= crypto.randomUUID();
    myLibrary.push(Book);
}
function removeFromLibrary(id){
    i=0;
    while(id!=myLibrary[i]){
        i+=1;
    }
    myLibrary.splice(1,i);
}
function yapParagraph(){
    const content= document.querySelector("#yap");
    if(myLibrary.length===0){
        content.textContent="No Books in the Library, you can add some tho!"
    }
    else{
        content.textContent=`There are ${myLibrary.length} books in the Library. Click the button below to see them!`
    }
}
yapParagraph();
const myForm = document.getElementById(`addBookForm`);
myForm.addEventListener(`submit`, function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const book = new Book (
        formData.get('bookName'),
        formData.get('authorName'),
        formData.get('numOfPages'),
        formData.get('readStatus')
    );
    AddToLibrary(book);
    yapParagraph();
    myForm.reset();
});
const myButton = document.getElementById(`showBooks`);
const fatherDiv = document.querySelector("#books");
myButton.addEventListener('click', ()=>{
    fatherDiv.replaceChildren();
    for(i=0;i<myLibrary.length;i++){
        const childElement = document.createElement(`div`);
        const nameOfBook = document.createElement(`p`);
        nameOfBook.id= `currentBookName`;
        nameOfBook.textContent= `${myLibrary[i].name}`
        const nameOfAuthor = document.createElement(`p`);
        nameOfAuthor.id=`currentBookAuthor`;
        nameOfAuthor.textContent=`by ${myLibrary[i].author}`;
        const numberOfPages = document.createElement(`p`);
        numberOfPages.id=`currentBookPages`;
        numberOfPages.textContent=`${myLibrary[i].numberOfPages} Pages`;
        const readStatus = document.createElement(`p`)
        readStatus.id=`currentBookStatus`;
        readStatus.textContent= `${myLibrary[i].readStatus}`
        childElement.id = `individualBook`;
        childElement.append(nameOfBook);
        childElement.append(nameOfAuthor);
        childElement.append(numberOfPages);
        childElement.append(readStatus);
        fatherDiv.appendChild(childElement);
    }
});
