import { Router } from "express";
// import { protectRoute } from "../middleware/auth.middleware";

const router = Router();

router.get("/like", (req, res) => {
  req.auth.userId;
  res.send("User Route with  GET method");
});

export default router;
