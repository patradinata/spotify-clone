import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware";
import { getStats } from "../controller/stat.controller";

const router = Router();
router.get("/", protectRoute, requireAdmin, getStats);

export default router;
