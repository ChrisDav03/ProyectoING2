import { Router } from "express";
import applyFiltersHandler from "./applyFiltersHandler.mjs"
const router = Router();

router.get("/", (req, res) => {
  res.send("OK images GET");
})

router.post("/", applyFiltersHandler);

export const test = () => {

}

export default router;