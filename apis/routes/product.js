const express=require('express');
const routes=express.Router();


//anything that has /product in url will be transfered to this handler file 
// /product/[after this slash everything will be handled here]
routes.get('/', (req, res, next) =>{
    res.status(200).json({
        message: 'product GET method here'
    });
});

routes.post('/', (req, res, next) =>{
    res.status(200).json({
        message: 'product POST method here'
    });
});

//dynamic url params reading
routes.get('/:productId', (req, res, next) =>{
    res.status(200).json({
        message: 'product GET method here',
        id: req.params.productId
    });
});

routes.post('/:productId', (req, res, next) =>{
    res.status(200).json({
        message: 'product POST method here',
        id: req.params.productId
    });
});

module.exports=routes;