const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const getingatlan = async (req,res) =>{
    try {
        const ingatlan = await prisma.ingatlanok.findMany()
        res.status(200).json(ingatlan)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Failed to fetch ingatlan"})
    }
}

const createingatlan = async (req, res) => {
    try {
        const newinagetlan = await prisma.ingatlanok.create({
            data: { 
                kategoria: req.body.kategoria, 
                leiras: req.body.leiras, 
                hirdetesDatuma: req.body.hirdetesDatuma, 
                tehermentes: req.body.tehermentes, 
                ar: req.body.ar, 
                kepUrl: req.body.kepUrl 
            },
        });
        res.status(201).json({ id: newinagetlan.id });
    } catch (error) {
        res.status(400).json({ error: "Hiányos adatok" });
    }
};


const deleteIngatlan = async (req, res) => {
    const inagtlanId = parseInt(req.params.id);
    try {
        const deletedingatlan = await prisma.ingatlanok.delete({
            where: { id: inagtlanId },
        });
        res.status(204).json("  ");
    } catch (error) {
        res.status(404).json({ error: "Az ingatlan nem létezik" });
    }
};

const updateIngatlan = async (req, res) => {
  const inagtlanId = parseInt(req.params.id);
  const { leiras,ar,tehermentes } = req.body;

  try {
    const ingatlan = await prisma.ingatlanok.findUnique({
      where: { id: inagtlanId },
    });

    if (!ingatlan) {
      res.status(404).json("Ilyen biza nem létezik");
      return;
    }

    const updatedIngatlan = await prisma.ingatlanok.update({
      where: { id: inagtlanId },
      data: { leiras,ar,tehermentes },
      
    });

    res.status(200).json(updatedIngatlan);
  } catch (error) {
    res.status(500).json({ error: "Az ingatlan nem változott" });
  }
};
module.exports = {
    getingatlan,
    createingatlan,
    deleteIngatlan,
    updateIngatlan
}