import express from "express";
import {createPMInfo, getPMInfo} from "../controllers/pm.controller.js";

const router = express.Router();

router.post('/ProfileManagement', createPMInfo);

router.get('/pm_info', getPMInfo);

export default router;