const library = [
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997, isRead: true, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } },
    { title: "1984", author: "George Orwell", year: 1949, isRead: true, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } }
];

function displayLibrary() {
    return library.map(book => book.bookInfo()).join("<br>");
}

function runTask2() {
    const output = document.getElementById("output");
    output.innerHTML = displayLibrary();
    library.push({ title: "Dune", author: "Frank Herbert", year: 1965, isRead: false, bookInfo() { return `${this.title} (${this.year}) — ${this.author}, Прочитана: ${this.isRead ? "Так" : "Ні"}`; } });
    output.innerHTML += "<br><br>Після додавання:<br>" + displayLibrary();
}
