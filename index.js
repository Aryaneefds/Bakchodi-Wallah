import express from "express";

import router from './Routes/User.js';

const app = express();


app.use('',router);
app.listen(3000);