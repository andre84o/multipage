import express from "express";
import proPerties from "../data/data.js";

const buyRouter = express.Router();

buyRouter.get("/", (req, res) => {
    const category = "Apartment";
    const filteredPropertie = proPerties.filter(proPerties => proPerties.group === category);



    res.render ("pages/buy", {
    page: "buy",
    proPerties: filteredPropertie
    

    })
});


buyRouter.get("/:id", (req, res) => {
    const category = "Apartment";
    const filteredPropertie = proPerties.filter(proPerties => proPerties.group === category);
    const propertieId = req.params.id ? req.params.id.toLowerCase(): "" ;

    console.log("Requested pp name:", propertieId); 
    
    const selectedPropertie = proPerties.find(
        property => proPerties.id.toLowerCase() === propertieId && proPerties.group === category); 

    if (!selectedPropertie) {
        return res.status(404).send("Property not found");
    }

    res.render("pages/buy", { 
        pageTitle: selectedPropertie.id,
        selectedPropertie: selectedPropertie
    });
});

export default buyRouter;