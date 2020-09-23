const express=require('express');
const routes=express.Router();

routes.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'order GET works'
    });
});

routes.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'order POST works'
    });
});

routes.get('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'order GET works',
        id: req.params.orderId
    });
});

routes.post('/:orderId', (req, res, next) =>{
    res.status(200).json({
        message: 'order POST works',
        id: req.params.orderId
    });
});

module.exports=routes;
