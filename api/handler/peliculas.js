const express = require("express");

const peliculas = require("../controllers/peliculas");

const router = express.Router();

router.get("/:id?", async ({ params: { id: _id } }, response) => {
  const result = await peliculas.get(_id);

  response.json({ result });
});

router.post("/", ({ body: pelicula }, response) => {
  collection.insertOne(pelicula.body, (err, result) => {
    if (err) throw err;

    response.json({
      success: true,
      message: "insertado correctamente."
    });
  });
});

router.delete("/:id", ({ params: { id: _id } }, response) => {
  collection.findOneAndDelete({ _id: ObjectId(_id) }, (err, result) => {
    if (err) throw err;
    response.json(result);
  });
});

module.exports = router;