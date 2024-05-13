const express = require("express")
const router = express.Router();
router.use(express.json());

const User = require("../model/userModel")
const crudController = require("../controller/crudCont")

router.post("/", crudController.post(User));
router.get("/", crudController.get(User));
router.patch("/:id", crudController.patch(User));
router.delete("/:id", crudController.deleteOne(User));

module.exports = router;