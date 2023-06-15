const axios = require("axios");
const { response } = require("express");

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const {id} = req.params;
    const response = await axios.get(`${URL}${id}`)
    const {status, name, species, origin, image, gender} = response.data
    const character = {id, status, name, species, origin, image, gender}
    return name
      ? res.status(200).json(character)
      : res.status(404).send("Not Found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
  
  
  //PROMISE VERSION
  // const {id} = req.params;
  // axios
  //   .get(`${URL}${id}`)
  //   .then(response => response.data)
  //   .then(data => {
  //     if (!data.name) return res.status(404).send("Not found");
  //     const character = {
  //       id: data.id,
  //       name: data.name,
  //       gender: data.gender,
  //       species: data.species,
  //       origin: data.origin,
  //       image: data.image,
  //       status: data.status
  //     }
  //     return res.status(200).json(character);
  //   })
  //   .catch(error =>{
  //     return res.status(500).send(error.message);
  //   })
}

// // RECICLADO EN LA HW4(Express)
// // const getCharById = (res, id) => {
// //   axios
// //     .get(`https://rickandmortyapi.com/api/character/${id}` )
// //     .then(response => response.data)
// //     .then(data => {
// //       const character = {
// //         id: data.id,
// //         name: data.name,
// //         gender: data.gender,
// //         species: data.species,
// //         origin: data.origin, //aca pasamos el obj entero, despues el front saca el .name
// //         image: data.image,
// //         status: data.status
// //       }
// //       res
// //         .writeHead(200, {"Content-Type": "application/josn"})
// //         .end(JSON.stringify(character))
// //     })
// //     .catch(error => {
// //       res
// //         .writeHead(500, {"Content-Type": "text/plain"})
// //         .end(error.message)
// //     })
// // }

module.exports = getCharById;