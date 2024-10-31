const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const pins = await db.getAllPins();

  res.json({
    title: "Pins",
    pins: pins,
  });
});

// Display item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.render("index", { title: "mini messageboard" })
});  

// Handle item create on POST.
exports.item_create_post = asyncHandler(async (req, res, next) => {
  const { pin } = req.body;
  console.log(pin)
  try {
    await db.insertPin(pin);
    res.json({
      title: "Pin inserted",
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      // Specific error handling, e.g., if there's a validation error on the pin
      res.status(400).json({ error: "Invalid pin data" });
    } else {
      // General error handling
      console.error("Database error:", error);
      res.status(500).json({ error: "An error occurred while inserting the pin" });
    }
  }
});  

// Display item search form on GET.
exports.item_search_get = asyncHandler(async (req, res, next) => {
  res.render("search", { title: "Search User" })
});  

// Handle item search on POST.
exports.item_search_post = asyncHandler(async (req, res, next) => {
  const { username } = req.body;
  const usernames = await db.getSearchUsernames(username);
  console.log("Usernames: ", usernames);
  // res.send("Usernames: " + usernames.map(user => user.username).join(", "));
  res.render("users", { title: "Usernames: " + usernames.map(user => user.username).join(", ") })
});  

exports.item_delete_get = asyncHandler(async (req, res, next) => {
  await db.getDeleteAllUsernames();
  res.redirect("/");
});  