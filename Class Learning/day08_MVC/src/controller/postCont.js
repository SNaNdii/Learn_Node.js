const express = require("express")
const router = express.Router();
router.use(express.json());

const Post = require("../model/postModel");
const crudController = require("../controller/crudCont")

router.post("/", crudController.post(Post));
router.get("/", crudController.get(Post));
router.patch("/:id", crudController.patch(Post));
router.delete("/:id", crudController.deleteOne(Post));

module.exports = router;