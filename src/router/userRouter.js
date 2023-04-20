const express = require('express');
const router = express.Router();

const { ProfileController } = require("../controllers/profileController");
const data = require("../infra/db/data");

const profileController  = new ProfileController()


router.post("/profileclient/new", profileController.exec);

router.get("/profileclient/new", (request, response) => {
    return response.send(data)
});


module.exports = router;