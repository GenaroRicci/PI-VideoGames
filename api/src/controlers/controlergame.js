const {Videogames, Genres} = require('../db');
const {API_KEY} = require(process.env);

const getGames = async() =>{
    const response = await axios.get(`https://api.rawg.io/api/games?api_key=${YOUR_API_KEY}`);
    return response.data;
}
module.exports = {getGames};