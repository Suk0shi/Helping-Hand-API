const express = require("express");
const router = express.Router();

// Require controller modules.
const item_controller = require("../controllers/itemController");
const content_controller = require("../controllers/contentController");


/// ITEM ROUTES ///

// GET catalog home page.
router.get("/", item_controller.index);

// GET request for creating a Item.
router.get("/new", item_controller.item_create_get);

// POST request for creating Item.
router.post("/new", item_controller.item_create_post);

router.get("/search", item_controller.item_search_get);

router.post("/search", item_controller.item_search_post);

router.get("/delete", item_controller.item_delete_get);

// POST request for creating Content.
router.post("/:id", content_controller.content_create_post);



module.exports = router;
