const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();


const getUsers = async (req,res) =>{
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Failed to fetch users"})
    }
}

const getUsersById = async (req,res) => {
 const userId = parseInt(req.params.id);
 try {
    const user = await prisma.user.findUnique({
        where: {id: userId},
    });
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({error: "User not found"});
    }
}
catch (error){
    res.status(500).json({error: "Failed to fetch"})
}
}
const createUser = async (req,res) => {
 const {email, password, name} = req.body;
 try{
    const newUser = await prisma.user.create({
        data: {email, password, name},
    });
    res.status(201).json(newUser)

 } catch (error)
 {
    res.status(500).json({error: "Failed to create user"})
 }
 res.status(201).send(`User created: ${JSON.stringify(newUser)}`)
}

const deleteUser = async (req,res) => {
    const userId = parseInt(req.params.id);
    try {
        const user = await prisma.user.delete({
            where: {
                id: userId
            }
        });
        res.json(user)
    } catch (error) {
        res.status(500).json({error: "Failed to delete user"})
    }
};



module.exports = {
    getUsers,
    getUsersById,
    createUser,
    deleteUser
}