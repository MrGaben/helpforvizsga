const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getAllReaders = async () => {
    const readers = await prisma.reader.findMany();
    return readers;
}
const createReader = async (reader) => {
    const newReader = await prisma.reader.create({data: reader});
    return newReader;
}
const getReaderBooks = async (id) => {
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        throw new Error('A megadott id nem érvényes szám.');
    }


    const books = await prisma.book.findMany({
        where: { readerId: parsedId },
        select: { title: true },  
    });

    if (books.length === 0) {
        throw new Error(`Nem található könyv a ${id} olvasóhoz.`);
    }

    return books.map(book => book.title);  
};
const addBookToReader = async (id, book) => {

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
        throw new Error('A megadott id nem érvényes szám.');
    }


    const reader = await prisma.reader.findUnique({
        where: { id: parsedId }
    });

    if (!reader) {
        throw new Error(`Nem található olvasó a ${id} azonosítóval.`);
    }


    const newBook = await prisma.book.create({
        data: {
            title: book.title,
            author: book.author,  
            readerId: parsedId,
        },
    });

    return newBook;
};



module.exports = {getAllReaders, createReader, getReaderBooks, addBookToReader};