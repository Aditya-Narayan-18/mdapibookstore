const Book = require("../../models/Book");
async function getBooks(req, res) {
    try {
        const books = await Book.find();
        console.log(books, "books");
        res.status(200).send({ data: books });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}
modiule.exports = { getBooks };
