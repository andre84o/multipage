import express from 'express';
import * as dotenv from "dotenv";
import * as path from "path";
import { fileURLToPath } from "url";
import contactRouter from './routes/contact.js';
import rentRouter from './routes/rent.js';
import sellRouter from './routes/sell.js';
import buyRouter from './routes/buy.js';


dotenv.config();

const PORT = process.env.PORT || 3000;


const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


console.log("Server running on port:", PORT);



app.use(express.static(path.join(__dirname, "public")));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/" ,(req, res) => {
    res.render ("pages/home",{
        pageTitle: "Home",
        page: "home",
        
    
    })

});

app.use("/contact", contactRouter);
app.use("/rent", rentRouter);
app.use("/sell", sellRouter);
app.use("/buy", buyRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
