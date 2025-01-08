const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const Getcars = async (req,res) =>{
    try {
        const cars = await prisma.car.findMany()
        res.json(cars)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Failed to fetch cars"})
    }
}

const createCar = async (req,res) => {
 const {Model, Year, Manufacturer} = req.body;
 try{
    const newcar = await prisma.car.create({
        data: {Model, Year, Manufacturer},
    });
    res.status(201).json(newcar)

 } catch (error)
 {
    res.status(500).json({error: "Failed to create car"})
 }
 res.status(201).send(`Car created`)
}

const deleteCar = async (req,res) => {
    const CarID = parseInt(req.params.id);
    try {
        const cars = await prisma.car.delete({
            where: {
                CarID: CarID
            }
        });
        res.json(cars)
    } catch (error) {
        res.status(500).json({error: "Failed to delete car"})
    }
};



module.exports = {
    Getcars,
    createCar,
    deleteCar
}