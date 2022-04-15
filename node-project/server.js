import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://shanemitnick:Steelers21@cluster0.hbwcs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


const app = express();
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitController(app);


app.listen(process.env.PORT || 4000);


