let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
}

const deleteFav = (req, res) => {
    const {id} = req.params;
    myFavorites = myFavorites.filter(char => char.id!== id) //En este caso ambos son string, no hace falta convertir
    return res.status(200).json(myFavorites);
}

module.exports = {postFav, deleteFav};