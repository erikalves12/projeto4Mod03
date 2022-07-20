const router = require("express").Router();
const personagemController = require("./personagem.controller");

router.post("/create", personagemController.createPersonagemrController);
router.get("/", personagemController.findAllPersonagensControler);
router.get("/find/:id", personagemController.findByIdPersonagemController);
router.get(
  "/busca/search/",
  personagemController.findByNomePersonagemController
);
router.put("/update/:id", personagemController.updatePersonagemController);
router.delete("/delete/:id", personagemController.deletePersonagemController);

module.exports = router;
