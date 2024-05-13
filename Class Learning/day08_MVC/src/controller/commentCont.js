const express = require("express")
const router = express.Router();
router.use(express.json());

const Comment = require("../model/commentModel")
const crudController = require("../controller/crudCont")

router.post("/", crudController.post(Comment));
router.get("/", crudController.get(Comment));
router.patch("/:id", crudController.patch(Comment));
router.delete("/:id", crudController.deleteOne(Comment));

module.exports = router;