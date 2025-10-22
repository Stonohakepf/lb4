let library = [
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997, isRead: true, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } }
];

function displayLibrary() {
    return library.map(book => book.bookInfo()).join("<br>");
}

function runTask4() {
    const title = prompt("Введіть назву книги:");
    const author = prompt("Введіть автора:");
    const year = parseInt(prompt("Введіть рік видання:"), 10);
    const isRead = confirm("Чи прочитана книга?");
    library.push({ title, author, year, isRead, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } });
    document.getElementById("output").innerHTML = displayLibrary();
}
