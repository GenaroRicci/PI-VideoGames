const {Router} = require('express');
const {getGamesHandler} = require ('../handlers/handler.js');

const routerGames = Router();
routerGames.get('/', getGamesHandler);

module.exports = routerGames;