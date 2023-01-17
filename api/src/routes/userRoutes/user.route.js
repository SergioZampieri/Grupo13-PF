const {Router} = require("express")
const postUserData = require("../../controllers/userControllers/user.controller")


const router = Router()

router.post("/", async(req, res)=>{
    try {
        const userData = req.body;
        const userDataCreated = await postUserData(userData)
        res.status(200).json(userDataCreated)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;