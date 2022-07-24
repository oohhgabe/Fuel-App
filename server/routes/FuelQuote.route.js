import express from "express";
import {createInfo,getInfo} from "../controllers/FuelQuote.controller.js";

const router = express.Router();

router.post('/create',createInfo);

router.post('/quote_info',getInfo);

export default router;