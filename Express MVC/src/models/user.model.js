const mongoose = require("mongoose");

const connect = require("./configs/db")

const router = required("Router");
const app = express();

app.use = express.Router();

router.post("/", async(req, res)=>{
    try {
       await connect();
       console.log("I am working for you Anannya!") 
    } catch (error) {
        
    }
});

module.exports = router;