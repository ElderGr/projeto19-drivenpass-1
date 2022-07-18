import express from "express";

import authRouter from "./auth.route.js";
//import credentialRouter from './credential.route';
//import notesRouter from './notes.route';
//import cardsRouter from './cards.route';
//import networkRouter from './network.route';

const router = express.Router();

router.use(authRouter);
//router.use('/credential', credentialsRouter);
//router.use('/notes', notesRouter);
//router.use('/cards', cardsRouter);
//router.use('/network', networkRouter);

export default router;