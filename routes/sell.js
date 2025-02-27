import express from 'express';

const sellRouter = express.Router();

sellRouter.get("/", (req, res) => {
    res.render ("pages/sell", {
        page: "sell"
        


    })
})



export default sellRouter;