import { Router, Request, Response } from 'express';


const router = Router();


router.get('/mensajes', ( req: Request, res: Response ) => {

    res.json({
        ok: true,
        mensaje: 'Get listo'
    });

});

router.post('/mensajes', ( req: Request, res: Response ) => {

    const uno = req.body.uno;
    const dos = req.body.dos;

    res.json({
        ok: true,
        uno,
        dos
    });

});

router.post('/mensajes/:id', ( req: Request, res: Response ) => {

    const uno = req.body.uno;
    const dos = req.body.dos;
    const id = req.params.id;

    res.json({
        ok: true,
        uno,
        dos,
        id
    });

});


export default router;
