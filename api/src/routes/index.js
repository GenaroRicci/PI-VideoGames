const { Router } = require('express');
const routerGames = require('./routergames');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
router.use('/games', routerGames);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
