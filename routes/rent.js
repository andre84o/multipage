import express from 'express';

const rentRouter = express.Router();

rentRouter.get("/", (req, res) => {
    res.render ("pages/rent", {
        page: "rent"
        


    })
})



export default rentRouter;