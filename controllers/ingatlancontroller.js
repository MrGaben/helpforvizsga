
//const {PrismaClient} = require("@prisma/client");
//const prisma = new PrismaClient();

const ingatlanService = require('../services/ingatlanService');
const getallIngatlan = async (req,res) =>{
    try {
        const ingatlan = await ingatlanService.getAllingatlan()
        res.status(200).json(ingatlan)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Failed to fetch ingatlan"})
    }
}

const createingatlan = async (req, res) => {
    const data = req.body
    try {
        const newinagetlan = await ingatlanService.createingatlan(data);
        res.status(201).json({ id: newinagetlan.id });
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "Hiányos adatok" });
    }
};


const deleteIngatlan = async (req, res) => {
    const ingatlanId = parseInt(req.params.id);
    const ingatlan = await prisma.ingatlanok.findUnique({ where: { id: ingatlanId } });
    if (!ingatlan) {
        res.status(404).json({ error: "Az ingatlan nem létezik" });
        return;
    }
    try {
        const deletedingatlan = await ingatlanService.deleteingatlan(ingatlanId);
        res.status(204).json("  ");
    } catch (error) {
        res.status(404).json({ error: "Az ingatlan nem létezik" });
    }
};

const updateIngatlan = async (req, res) => {
  const ingatlanId = parseInt(req.params.id);
  const data = req.body;

  try {

    const updatedIngatlan = await ingatlanService.updateingatlan(ingatlanId, data);

    res.status(200).json(updatedIngatlan);
  } catch (error) {
    res.status(500).json({ error: "Az ingatlan nem változott" });
  }
};
module.exports = {
    getallIngatlan,
    createingatlan,
    deleteIngatlan,
    updateIngatlan
}