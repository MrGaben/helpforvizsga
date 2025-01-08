const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getAllingatlan = async () => {
    const ingatlan = await prisma.ingatlanok.findMany();
    return ingatlan;
}

const createingatlan = async (data) => {
    const newingatlan = await prisma.ingatlanok.create({data});
    return newingatlan;
}

const deleteingatlan = async (id) => {
    const deletedingatlan = await prisma.ingatlanok.delete({where: {id:parseInt(id)}});
    return deletedingatlan;
}

const updateingatlan = async (id, data) => {
    const updatedingatlan = await prisma.ingatlanok.update({where: {id: parseInt(id)}, data});
    return updatedingatlan;
}

module.exports = {getAllingatlan, createingatlan, deleteingatlan, updateingatlan};