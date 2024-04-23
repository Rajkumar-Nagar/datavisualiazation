import { Router } from "express";
import mongoose from "mongoose";

import Data from "../model/data.model.js";

const router = Router();

router.get('/data', async(req, res) => {
   try {
     const data=await Data.find()
     res.status(200).json(data)
   } catch (error) {
    console.log(error)
   }

});

export default router