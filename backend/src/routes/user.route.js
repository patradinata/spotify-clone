import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";
// import { protectRoute } from "../middleware/auth.middleware";

const router = Router();

router.get("/", protectRoute, getAllUsers);
// Todo: getMessages

export default router;
