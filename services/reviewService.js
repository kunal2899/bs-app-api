const pool = require("../config/dbConfig");

const fetchAllReviewsByBookId = async (bookId) => {
  return await pool.query("SELECT * FROM reviews WHERE book_id = $1;", [ bookId ]);
};

const createReview = async (bookId, reviewData) => {
  const { rating, review } = reviewData;
  return await pool.query(
    `INSERT INTO reviews ("rating","review","book_id") VALUES($1,$2,$3) RETURNING *;`,
    [rating, review, bookId]
  );
};

module.exports = {
  fetchAllReviewsByBookId,
  createReview,
};
