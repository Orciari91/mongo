
const isEmpty = require("lodash.isempty");
const getCollection = require("./utils/api.js").getCollection

const collection = getCollection("mongoTest");

api.get("/api/peliculas/:id?", ({ params: { id: _id } }, response) => {
  let query = {};

  if (!isEmpty(_id)) {
    query = { ...query, _id: ObjectId(_id) };
  }

  collection.find(query).toArray((err, result) => {
    if (err) throw err;
    response.json({ result });
  });
});

api.post("/api/peliculas", ({ body: pelicula }, response) => {
  collection.insertOne(pelicula.body, (err, result) => {
    if (err) throw err;

    response.json({
      success: true,
      message: "insertado correctamente."
    });
  });
});

api.delete("/api/peliculas/:id", ({ params: { id: _id } }, response) => {
  collection.findOneAndDelete({ _id: ObjectId(_id) }, (err, result) => {
    if (err) throw err;
    response.json(result);
  });
});

const port = 8080;

api.listen(port, () => console.log(`server started on ${port}`));