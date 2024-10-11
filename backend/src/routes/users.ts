const express = require('express');
import { createUser } from "../controllers/oldUserController";

const router = express.Router();

router.route('/signup').post(createUser);