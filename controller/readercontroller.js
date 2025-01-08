const readerService = require("../service/readerService.js");

const getAllReaders = async (req,res) => {
    try{
        const readers = await readerService.getAllReaders()
        res.json(readers);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to fetch readers"});
    }
}
const createReader = async (req,res) => {
    try{
        const reader = req.body;
        const newReader = await readerService.createReader(reader);
        res.json(newReader);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Failed to create reader"});
    }
}
const getReaderBooks = async (req, res) => {
    try {
        const id = req.params.id;
        const books = await readerService.getReaderBooks(id);  
        res.json(books); 
    } catch (error) {
        console.error(error);
        if (error.message.includes('Nem található könyv')) {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: "Failed to fetch books" });
    }
};
const addBookToReader = async (req, res) => {
    try {
        const id = req.params.id;  
        const book = req.body;      


        const newBook = await readerService.addBookToReader(id, book);


        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        console.error(error);

        if (error.message.includes('Nem található olvasó')) {
            return res.status(404).json({ error: error.message });
        }


        res.status(500).json({ error: "Failed to add book to reader" });
    }
};



module.exports = {getAllReaders, createReader, getReaderBooks, addBookToReader};