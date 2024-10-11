const express = require('express');
import { createUser } from "../controllers/userController";

const router = express.Router();

router.route('/signup').post(createUser);