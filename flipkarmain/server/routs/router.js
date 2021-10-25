import  express  from "express";
import { userSignup } from "../controller/user-controller";

const routes =express.Router();

routes.post('/signup',userSignup);

export default routes;