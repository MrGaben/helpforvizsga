const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const GetClients = async (req,res) =>{
    try {
        const clients = await prisma.clients.findMany()
        res.json(clients)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Failed to fetch clients"})
    }
}

const getClientOrders = async (req,res) => {
    const clientsId = parseInt(req.params.id);
 try{
    const clients = await prisma.order.findMany({
        where:{
            clientId: clientsId
        }
    });
    res.status(201).json(clients)

 } catch (error)
 {
    res.status(500).json({error: "Failed to get order"})
 }
}

const newOrder = async (req,res) => {
    const {cost, clientId} = req.body;
    try {
        const neworder = await prisma.order.create({
            data:{
                cost: parseInt(cost),
                clientId: parseInt(clientId)
            }
        });
        res.json(neworder)
    } catch (error) {
        res.status(500).json({error: "Failed to create order"})
    }
};



module.exports = {
    GetClients,
    getClientOrders,
    newOrder
}