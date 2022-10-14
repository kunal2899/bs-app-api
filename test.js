const cleanBookData = books => {
    let cleanedData = {};
    for(let book of books) {
        console.log(book, cleanedData)
        if(!(book.id in cleanedData)) {
            const { id, identifier, name, description, author_name, ["reviews.rating"]: rating, ["reviews.review"]: review } = book;
            console.log(rating, review)
            cleanedData[id] = {
                id, identifier, name, description, author_name,
                reviews: [{ rating, review }]
            }
        } else {
            const { ["reviews.rating"]: rating, ["reviews.review"]: review } = book;
            const currData = cleanedData[book.id];
            cleanedData[book.id] = { ...currData, reviews: [ ...currData.reviews, { rating, review } ] }
        }
    }
    return Object.values(cleanedData);
}

const books = [
    {
        "id": 1,
        "identifier": "rrviDeFUm",
        "name": "Once upon a time",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "author_name": "John Doe",
        "reviews.id": 1,
        "reviews.rating": 5,
        "reviews.review": "A book that helped me in my tough time. Highly recommend to read this book.",
        "reviews.bookId": 1
    },
    {
        "id": 1,
        "identifier": "rrviDeFUm",
        "name": "Once upon a time",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "author_name": "John Doe",
        "reviews.id": 2,
        "reviews.rating": 4,
        "reviews.review": "Great book to learn.",
        "reviews.bookId": 1
    },
    {
        "id": 2,
        "identifier": "okD3Pfo-y",
        "name": "Atomic habits",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "author_name": "James Clear",
        "reviews.id": null,
        "reviews.rating": null,
        "reviews.review": null,
        "reviews.bookId": null
    },
    {
        "id": 3,
        "identifier": "3J6q-uqZQ",
        "name": "Deep Work",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It has survived not only five centuries.",
        "author_name": "Wittie Joe",
        "reviews.id": null,
        "reviews.rating": null,
        "reviews.review": null,
        "reviews.bookId": null
    }
]

console.log(cleanBookData(books))