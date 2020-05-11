function createLibrary(name) {
return {name: name, shelves: {fantasy: [], fiction: [], nonFiction: []}}
}

function addBook(library, book) {
//link book.genre to shelf
if (book.genre === "fantasy") {
  library.shelves.fantasy.unshift(book);
}else if (book.genre === "fiction") {
    library.shelves. fiction.unshift(book);
  }else if (book.genre === "nonFiction") {
    library.shelves.nonFiction.unshift(book);
  }
}

function checkoutBook(library, bookTitle) {
var shelfGenres = Object.keys(library.shelves);
for (i = 0; i < shelfGenres.length; i++) {
  var bookObjects = library.shelves[shelfGenres[i]]
for (j = 0; j < bookObjects.length; j++) {
  var titles = bookObjects[j].title
  var index = bookObjects.indexOf(bookObjects[j])
 if (bookTitle === titles) {
  bookObjects.splice(index, 1)
  return `You have now checked out ${bookTitle} from the ${library.name}`
}
}
}
 return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
   createLibrary: createLibrary,
   addBook: addBook,
   checkoutBook: checkoutBook
};
