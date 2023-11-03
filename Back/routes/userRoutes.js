const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get("/login", (req, res) => {
    res.send("Login");
});

module.exports = router