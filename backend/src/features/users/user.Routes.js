import { Router } from "express"; 

import { userController } from "./user.controller.js";

const router = Router(); 

router.post("/", userController.create);

export default router; 
console.log("Estamos dentro de las rutas de los usuarios")