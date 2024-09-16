let AddBook = document.querySelector(".AddBook")
let form = document.querySelector(".form")
let Submit = document.querySelector(".Submit")
const title = document.getElementById("title")
const titlevalue = title.value
let Author = document.getElementById("Author")
const Authorvalue = Author.value
let page = document.getElementById("page")
const pagevalue = page.value
let booksContainer = document.querySelector(".Books")
let Books = [];
let flag = false

AddBook.addEventListener("click", () => {
    console.log("hello")
    flag = !flag
    form.style.visibility = flag ? "visible" : "hidden"
    form.style.display = "block"
    title.value = "";
    Author.value = "";
    page.value = "";

})

Submit.addEventListener("click", (e) => {
    booksContainer.style.display = "block"
    form.style.display = "none"

    e.preventDefault();
    console.log("hii")
    const book = createBook(title.value, Author.value, page.value);
    //console.log(title.value)
    Books.push(book);
    booksContainer.innerHTML = "";
    // console.log(Books);
    Books.forEach((book) => {
        const titleP = document.createElement('p');
        const AuthorP = document.createElement('p');
        const pageP = document.createElement('p');
        const div = document.createElement("div");
        div.setAttribute("class", "divCards");
        // const buttons = document.childElementCount('button')
        // const Removes = document.createElement('button')

        titleP.textContent = book.title
        div.appendChild(titleP)
        booksContainer.appendChild(div)

        AuthorP.textContent = book.Author
        div.appendChild(AuthorP)
        // booksContainer.appendChild(div)

        pageP.textContent = book.page
        div.appendChild(pageP)
        // booksContainer.appendChild(div)

        const button = document.createElement("button")
        button.textContent = "Not Read"
        div.appendChild(button)
        //  booksContainer.appendChild(button)
        const Remove = document.createElement("button")
        Remove.textContent = "Remove"
        div.appendChild(Remove)
        //  booksContainer.appendChild(Remove)

        button.addEventListener("click", () => {
            console.log("muskan")
            if (button.style.backgroundColor === "red") {
                button.textContent = "Read";
                button.style.backgroundColor = "green";
            } else {
                button.style.backgroundColor = "red";
                button.textContent = "Not Read";
            }
        })
        Remove.addEventListener("click", () => {
            console.log("hii")
            booksContainer.style.display = "none"
        })
    })
    booksContainer.style.visibility = "visible";


});

function createBook(title, Author, page) {
    return {
        title, Author, page,
    }
}