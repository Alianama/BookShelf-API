const {
  addBooksHandler,
  getAllBooksHandler,
  getBooksByIdHandler,
  editBooksByIdhandler,
  deleteBooksByIdhandler,
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
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBooksByIdhandler,
  },
];

module.exports = routes;
