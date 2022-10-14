const reviewService = require('../services/reviewService');

const getAllReviews = async(req, res) => {
    try {
        const reviews = await reviewService.fetchAllReviewsByBookId(req.params.bookId);
        res.status(200).json(reviews.rows);
    } catch (error) {
        res.status(400).send(error);
    }
}

const createReview = async(req, res) => {
    try {
        const review = await reviewService.createReview(req.params.bookId, req.body);
        res.status(200).json(review.rows[0]);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getAllReviews,
    createReview
}