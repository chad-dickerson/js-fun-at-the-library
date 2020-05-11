function createTitle(bookTitle) {
  return `The ${bookTitle}`
};

function buildMainCharacter(name, age, pronouns) {
  return {name: name, age: age, pronouns: pronouns}
};


function saveReview(phrase, reviews) {
if (reviews.includes(phrase) === false) {
   reviews.push(phrase)
}
};

function calculatePageCount(bookTitle) {
return bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, genre) {
var book = {
  title: bookTitle,
  mainCharacter: bookCharacter,
  genre: genre,
  }
  book.pageCount = calculatePageCount(bookTitle)
  return book;
}
function editBook(book) {
  book.pageCount = book.pageCount * 0.75
}
module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
