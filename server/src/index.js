const express = require('express');
const morgan = require("morgan")
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const {conn} = require("./DB_connection")

// -CONFIGURACION DE CORS-
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
// ------------------------

// -PERMITE INTERPRETAR JSONs-
server.use(express.json());
// -MORGAN-
server.use(morgan("dev"))
// ------------------------


//USEA router cuando el URL empiece con /rickandmorty
server.use("/rickandmorty", router)

//Sincronizar con DDBB
conn.sync({force: true})
   .then(()=> {
      server.listen(PORT, () => {
         console.log('Server raised in port: ' + PORT);
      });
   })
   .catch(error => console.log (error.message));



//RECICLADO EN LS HW4(Express)
// const http = require("http");
// // const characters = require("./utils/data.js");
// const getCharById = require("./controllers/getCharById.js");
// const PORT = 3001;

// http.createServer((req, res) =>{
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if(req.url.includes("/rickandmorty/character")){
//         const id = req.url.split("/").pop();
//         getCharById(res, id);
//     }

//     //HW2(WebServer) - Reciclado en HW3(Promises)
//     // if(req.url.includes("/rickandmorty/character")){
//     //     const id = req.url.split("/").pop();
//     //     const character = characters.filter(chara => chara.id === Number(id))[0];
//     //     res.writeHead(200, {"content-type": "application/json"})
//     //     res.end(JSON.stringify(character))
//     // }
// })
// .listen(PORT, "localhost");