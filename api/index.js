require("dotenv").config();

const api = require("./utils/api").api;

const port = 8080;

api.listen(port, () => console.log(`server started on ${port}`));