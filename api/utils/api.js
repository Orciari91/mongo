const express = require("express");
const cors = require("cors");

const peliculas = require("../handlers/peliculas");

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json());
api.use(cors());

api.use("/api/v1/peliculas", peliculas);

exports.api = api;