import express, { Router } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
//componrnts
import Connection from './database/db.js';
import DefualtData from './defualt.js';
import Routes from './routs/router.js ';
dotenv.config();
const app = express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);

const PORT = 8000;

const username= process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 

Connection(username, password);
app.listen(PORT,()=>console.log(`Server is succesfully runing at port no ${PORT}`));

// data to data base
DefualtData();