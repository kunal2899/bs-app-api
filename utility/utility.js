const prepareBooksData = books => {
    let preparedData = {};
    for (let book of books) {
      if (!(book.id in preparedData)) {
        const {
          id,
          identifier,
          name,
          description,
          author_name,
          r_id,
          r_rating: rating,
          r_review: review,
          avg_rating
        } = book;
        preparedData[id] = {
          id,
          identifier,
          name,
          description,
          author_name,
          avg_rating: avg_rating !== null ? avg_rating : 0,
          reviews: r_id !== null ? [{ id: r_id, rating, review }] : [],
        };
      } else {
        const { r_id, r_rating: rating, r_review: review } = book;
        const currData = preparedData[book.id];
        preparedData[book.id] = {
          ...currData,
          reviews: [...currData.reviews, { id: r_id, rating, review }],
        };
      }
    }
    let result = Object.values(preparedData);

    //Putting common data at first index of data
    result.unshift({ bookCount: parseInt(books[0].book_count) });
    return result;
  };

  module.exports = {
    prepareBooksData
  }
  