const http = require("http");
const characters = require("./utils/data.js");
const getCharById = require("./controllers/getCharById.js");
const PORT = 3001;

http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes("/rickandmorty/character")){
        const id = req.url.split("/").pop();
        const character = characters.filter(chara => chara.id === Number(id))[0];
        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(character))
    }
})
.listen(PORT, "localhost");