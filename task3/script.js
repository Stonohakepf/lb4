const library = [
    { title: "Harry Potter", author: "J.K. Rowling", year: 1997, isRead: true },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, isRead: false },
    { title: "1984", author: "George Orwell", year: 1949, isRead: true },
    { title: "Dune", author: "Frank Herbert", year: 1965, isRead: false }
];

function runTask3() {
    const output = document.getElementById("output");
    const sorted = [...library].sort((a, b) => a.year - b.year);
    const unreadBooks = library.filter(b => !b.isRead);
    const tolkienBook = library.find(b => b.author === "J.R.R. Tolkien");

    output.innerHTML = "Сортування за роком:<br>" + sorted.map(b => `${b.title} (${b.year})`).join("<br>");
    output.innerHTML += "<br><br>Непрочитані книги:<br>" + unreadBooks.map(b => b.title).join("<br>");
    output.innerHTML += "<br><br>Книга Толкіна:<br>" + (tolkienBook ? tolkienBook.title : "Не знайдено");
}
