const express = require('express');
const { registerUser, loginUser } = require('../controlador/controller');

const router = express.Router();

router.post('/Registro', registerUser);
router.post('/Login', loginUser);

module.exports = router;
