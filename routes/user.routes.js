const { Router } = require("express");
const { usersGet,usersPost,usersDelete,usersPut,usersPatch } = require("../controllers/users.controller");

const router = Router();

router.get("/", usersGet);

router.put("/:id", usersPut);

router.post("/", usersPost);

router.delete("/", usersDelete);

router.patch("/", usersPatch);

module.exports = router;
