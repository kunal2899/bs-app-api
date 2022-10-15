const app = require('express').Router();
const { getAllBooks, createBook, getTotalCount, getBookById } = require('../controllers/bookController');
const { getAllReviews, createReview } = require('../controllers/reviewsController');

// Book routes
app.get("/", getAllBooks);
app.post("/", createBook);
app.get("/count", getTotalCount);
app.get("/:bookId", getBookById);

// Book reviews routes
app.get("/:bookId/reviews", getAllReviews);
app.post("/:bookId/reviews", createReview);

module.exports = app;