const express = require("express");
const router = express.Router();
router.use(express.json());

const User = require("../model/userModel");
const getCrud = require("./crudCont");

router.get("/", getCrud.getController(User));

router.post("/", getCrud.postController(User));

router.patch("/:id", getCrud.patchController(User));

router.delete("/:id", getCrud.deleteController(User));
module.exports = router;