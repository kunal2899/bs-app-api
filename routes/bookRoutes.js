const app = require('express').Router();
const { getAllBooks, createBook, getTotalCount } = require('../controllers/bookController');
const { getAllReviews, createReview } = require('../controllers/reviewsController');

// Book routes
app.get("/", getAllBooks);
app.get("/count", getTotalCount);
app.post("/", createBook);

// Book reviews routes
app.get("/:bookId/reviews", getAllReviews);
app.post("/:bookId/reviews", createReview);

module.exports = app;