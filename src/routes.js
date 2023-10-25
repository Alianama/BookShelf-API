const {
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdhandler,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getBooksByIdHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editBooksByIdhandler,
  },
];

module.exports = routes;
