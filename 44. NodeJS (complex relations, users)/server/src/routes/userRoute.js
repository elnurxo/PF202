const {
  getAllClients,
  getAllAdmins,
  registerClient,
} = require("../controllers/userController");
const upload = require("../middlewares/multer");
const express = require("express");
const router = express.Router();

router.get("/clients/", getAllClients);
router.get("/admins", getAllAdmins);
router.post("/register", upload.single("profileImage"), registerClient);

module.exports = router;
