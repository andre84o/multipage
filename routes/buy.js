import express from "express";
import proPerties from "../data/data.js";

const buyRouter = express.Router();

buyRouter.get("/", (req, res) => {
    const category = "Apartment";
    const filteredPropertie = proPerties.filter(property => property.group === category);

    console.log("Apartment", filteredPropertie);

    res.render ("pages/buy", {
    page: "buy",
    proPerties: filteredPropertie,
    selectedPropertie: null
    

    })
});


buyRouter.get("/:id", (req, res) => {
    const category = "Apartment";
    const filteredPropertie = proPerties.filter(property => property.group === category);
    const propertieId = req.params.id ? req.params.id.toLowerCase() : "";
    
    console.log("Requested property id:", propertieId); 
    
    const selectedPropertie = proPerties.find(
        property => property.id.toLowerCase() === propertieId && property.group === category
    ); 

    if (!selectedPropertie) {
        return res.status(404).send("Property not found");
    }

    res.render("pages/buy", { 
        page: "buy",
        pageTitle: selectedPropertie.id,
        selectedPropertie: selectedPropertie,
        proPerties: filteredPropertie
        
    });
});


export default buyRouter;