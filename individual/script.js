// ---------- КНИГИ ----------
const library = [
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    isRead: false,
    markAsRead() { this.isRead = true; }
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isRead: false,
    markAsRead() { this.isRead = true; }
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    isRead: true,
    markAsRead() { this.isRead = true; }
  }
];

// Обчислення середнього року
function calculateAverageYear(books) {
  if (!books.length) return 0;
  const sum = books.reduce((acc, b) => acc + b.year, 0);
  return Math.round(sum / books.length);
}

function showBooks() {
  console.table(library);
}

function showAverageYear() {
  const avg = calculateAverageYear(library);
  document.getElementById('avgYear').textContent = `Середній рік видання: ${avg}`;
}

// Відображення списку книг на сторінці
const booksDiv = document.getElementById('books');
booksDiv.innerHTML = `
  <table>
    <tr><th>Назва</th><th>Автор</th><th>Рік</th><th>Прочитано</th></tr>
    ${library.map(b => `
      <tr>
        <td>${b.title}</td>
        <td>${b.author}</td>
        <td>${b.year}</td>
        <td>${b.isRead ? '✅' : '❌'}</td>
      </tr>
    `).join('')}
  </table>
`;

// ---------- ЖУРНАЛИ ----------
const magazines = [
  { name: 'Forbes', topic: 'Бізнес', frequency: 'щомісяця', price: 150, isActive: true },
  { name: 'National Geographic', topic: 'Наука', frequency: 'щомісяця', price: 120, isActive: false },
  { name: 'Playboy', topic: 'Розваги', frequency: 'щомісяця', price: 200, isActive: true }
];

function totalActiveSubscriptions(mags) {
  return mags.filter(m => m.isActive).reduce((sum, m) => sum + m.price, 0);
}

function showMagazines() {
  console.table(magazines);
}

function showTotal() {
  const total = totalActiveSubscriptions(magazines);
  document.getElementById('totalPrice').textContent = `Загальна ціна активних підписок: ${total} грн`;
}

// Відображення журналів
const magazinesDiv = document.getElementById('magazines');
magazinesDiv.innerHTML = `
  <table>
    <tr><th>Назва</th><th>Тематика</th><th>Періодичність</th><th>Ціна</th><th>Активна</th></tr>
    ${magazines.map(m => `
      <tr>
        <td>${m.name}</td>
        <td>${m.topic}</td>
        <td>${m.frequency}</td>
        <td>${m.price}</td>
        <td>${m.isActive ? '✅' : '❌'}</td>
      </tr>
    `).join('')}
  </table>
`;
