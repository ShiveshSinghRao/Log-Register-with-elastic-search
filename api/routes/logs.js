import express from "express";
import { getLogs, createLog, SearchLogs } from "../controllers/createLog.js";

const router = express.Router();

// creatring a log

router.post("/create", createLog);

// Getting all logs
router.get("/", getLogs);

// search with fuzzy-ness and word search
router.get("/search", SearchLogs);

export default router;
