const shortid = require("shortid");
const pool = require("../config/dbConfig");

const getFetchQuery = bookIds => `SELECT book.*, review.id AS r_id, review.rating AS r_rating, review.review AS r_review, (SELECT AVG(r.rating) from books b JOIN reviews r ON r.book_id = b.id GROUP BY b.id HAVING b.id = book.id) AS avg_rating , (SELECT COUNT(*) FROM books) AS book_count FROM books book LEFT JOIN reviews review ON book.id = review.book_id WHERE book.id IN (${bookIds.join(",")});`;

const fetchBooks = async (page, limit) => {
  //Shortlisting the book ids to send data page-wise
  const { rows } = await pool.query("SELECT id FROM books LIMIT $1 OFFSET $2;", [ limit, (page-1)*limit ]);
  const bookIds = rows.map((row) => row.id);
  return await pool.query(getFetchQuery(bookIds));
};

const fetchBookById = async (bookId) => {
  return await pool.query(getFetchQuery([bookId]));
}

const createBook = async (bookData) => {
  const { name, description, authorName } = bookData;
  return await pool.query(
    `INSERT INTO books ("identifier","name","description","author_name") VALUES($1,$2,$3,$4) RETURNING *;`,
    [ shortid(), name, description, authorName ]
  );
};

const getTotalCount = async () => {
  return await pool.query("SELECT COUNT(*) AS book_count FROM books;");
};

module.exports = {
  fetchBooks,
  fetchBookById,
  createBook,
  getTotalCount,
};
