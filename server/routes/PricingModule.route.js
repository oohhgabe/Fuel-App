import express from "express";
import { PricingModule, getQuote } from "../controllers/PricingModule.controller.js";
import PricingModuleMock from "../controllers/MockPricingModule.controller.js";

const router = express.Router();

router.post('/pricing_module', PricingModule);
router.get('/pricing_info', getQuote);


/* FOR TESTING PURPOSES */
router.get('/pricing_test', PricingModuleMock);

export default router;