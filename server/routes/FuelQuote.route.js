import express from "express";
import {createInfo,getInfo,getAddress} from "../controllers/FuelQuote.controller.js";

const router = express.Router();

router.post('/create',createInfo);

router.post('/quote_info',getInfo);

router.post('/getAddress',getAddress)

export default router;