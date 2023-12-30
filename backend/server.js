import express, { json, urlencoded } from 'express';
import  bd  from "./db.js";
import { fileURLToPath } from 'url'
import path from 'path';
import cors from 'cors';
import multer from 'multer';
import morgan from 'morgan';
import  router  from "./routers/roomsrouter.js";
import  Authrouter  from "./routers/authrouter.js";
const app = express();

// Overwriting a Default filename and dirname finder because of using module type exports and imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Parsing the data
app.use(json({ limit: '30mb' }));
app.use(urlencoded({ limit: '30mb', extended: true }));

// For Avoiding Cross-Orgin-Resource-Sharing Error
app.use(cors({
    orgin:["http://localhost:3000"]
}));

// Logger Middleware 
app.use(morgan('common'));

// A express Built-In Middleware used to set the path for directory
app.use("/assets", express.static(path.join(__dirname, 'public/assets')))

// --- File Storage --- //
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/assets');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });




app.use('/api/rooms',router);
app.use('/api/user',Authrouter)
console.log(new Date());

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server Connected ${port}😃`));