function shelfBook(bookTitle, shelf) {
shelf.unshift(bookTitle)
if (shelf.length > 3) {
  shelf.shift(bookTitle)
}
}

function unshelfBook(bookTitle, shelf) {
shelf.splice(1, 1)
}

function listTitles(shelf) {
var title1 = shelf[0].title;
var title2 = shelf[1].title;
var title3 = shelf[2].title;
return `${title1}, ${title2}, ${title3}`;
}

function searchShelf(shelf, book) {
var title1 = shelf[0].title
var title2 = shelf[1].title
if (book === title1 || book === title2) {
  return true
} else {
  return false
}
}
module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
