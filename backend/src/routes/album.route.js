import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Allbum Route with GET method");
});

export default router;
