const book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    isRead: false,
    bookInfo() {
        const readStatus = this.isRead ? "Так" : "Ні";
        return `Назва: ${this.title}, Автор: ${this.author}, Рік видання: ${this.year}, Прочитана: ${readStatus}`;
    }
};

function runTask1() {
    const output = document.getElementById("output");
    output.innerHTML = book.bookInfo();
    book.isRead = !book.isRead;
    output.innerHTML += "<br>" + book.bookInfo();
}
