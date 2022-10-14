const bookService = require("../services/bookService");
const { prepareBooksData } = require("../utility/utility");

const getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const books = await bookService.fetchBooks(page, limit);
    return res.status(200).json(prepareBooksData(books.rows));
  } catch (error) {
    res.status(400).send(error);
  }
};

const createBook = async (req, res) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(200).json(book.rows[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTotalCount = async (req, res) => {
  try {
    const bookCount = await bookService.getTotalCount();
    res.status(200).json({ bookCount });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getTotalCount,
};
