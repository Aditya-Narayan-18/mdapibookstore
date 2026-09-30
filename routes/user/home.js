const express = require("express");
const homeController = require("../../controllers/user/homeController");
const router = express.Router();

router.get("/user/books", (req, res) => {
    homeController.getBooks(req, res);

});

module.exports = router;