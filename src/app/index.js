const express = require("express"); //importar express
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());

const misRutas = require("./firebase");

 //crear al servidor
const port = process.env.PORT || 3000;

app.use(express.static(process.cwd()+"/public/"));



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`hola servidor ejecucion en http://localhost:${port}`);
});

app.use('/', misRutas);
