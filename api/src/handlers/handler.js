const {getGames} = require('../controlers/controlergame');

const getGamesHandler = async(req, res) =>{

    try {
        const games = await getGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
module.exports = {getGamesHandler};