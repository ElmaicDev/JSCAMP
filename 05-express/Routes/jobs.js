import { Router } from "express";
import { jobController } from "../controllers/jobs";

export const jobsRouter = Router();

jobsRouter.get('/', jobController.getAll)

jobsRouter.get('/:id', jobController.getById)

jobsRouter.post("/", jobController.create)

jobsRouter.delete('/:id', (req, res) => {


})



// Reemplazar un recurso completo
jobsRouter.put("/:id", (req, res) => {

})

// Actualizar parcialmente un recurso
jobsRouter.patch("/:id", (req, res) => {

})