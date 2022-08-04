import express from "express";
import { PricingModule, getQuote } from "../controllers/PricingModule.controller.js";

const router = express.Router();

router.post('/pricing_module', PricingModule);
router.get('/pricing_info', getQuote);

export default router;