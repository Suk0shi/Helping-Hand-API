const express = require("express");
const router = express.Router();

// Require controller modules.
const user_controller = require("../controllers/itemController");


/// ITEM ROUTES ///

// GET catalog home page.
router.get("/", user_controller.index);

// GET request for creating a Item.
router.get("/new", user_controller.item_create_get);

// POST request for creating Item.
router.post("/new", user_controller.item_create_post);

router.get("/search", user_controller.item_search_get);

router.post("/search", user_controller.item_search_post);

router.get("/delete", user_controller.item_delete_get);


module.exports = router;
