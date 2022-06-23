import { Router } from "express";
import {
  getAllIncidence,
  createNewIncidence,
  getIncidenceById,

} from "../controllers/incidencias.controller";

const router = Router();

router.get("/incidencias", getAllIncidence);
router.get("/registrarIncidencia", createNewIncidence);
router.get("/designarIncidencia", getIncidenceById);

export default router;