import { Router } from "express";
import {
  getUserByLogin,
  getUserById,
  updateUserById,
} from "../controllers/user.controller";

const router = Router();

router.post("/user", getUserByLogin);
router.post("/perfil", getUserById);
router.post("/perfil", updateUserById);


export default router;