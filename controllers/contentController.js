const { body, validationResult } = require("express-validator");
const db = require("../db/queries");

const asyncHandler = require("express-async-handler");

exports.content_create_post = asyncHandler(async (req, res, next) => {
    const { pinContent } = req.body;
    const { id } = req.params;
    console.log(pinContent, id)
    try {
      await db.insertContent(pinContent, id);
      res.json({
        title: "Content inserted",
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        // Specific error handling, e.g., if there's a validation error on the pin
        res.status(400).json({ error: "Invalid content data" });
      } else {
        // General error handling
        console.error("Database error:", error);
        res.status(500).json({ error: "An error occurred while inserting the content" });
      }
    }
});