const express=require('express');
const app=express();

//for LOG messages u need
const morgan=require('morgan');

// app.use((req, res, next) =>{
//     res.status(200).json({
//         message: 'hello world'
//     });
// });

// /product will be handled here and everything after the product/[HERE]
const productRoutesHandler=require('./apis/routes/product');
// /order will be handled here and everything after the order/[HERE]
const orderRoutesHandler=require('./apis/routes/order');

//for LOG messages u need 
//npm i --save morgan 
//morgan module this will LOG all ur request
app.use(morgan('dev'));

//for handling CORS error (Cross-Origin-Resource-sharing)
//just add these header in ur responses
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //instead of * u can allow specific domain or URL to use ur API 
    //but as logics applied any REST API must be utilized by any kind of client mobile, tabs, webapp, websites etc so thats
    //why we use *

    res.header('Access-Control-Allow-Headers', '*');

    //adding header access for API that uses REST Methods
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        return res.status(200).json({});
    }

    next();

});


app.use('/product', productRoutesHandler);

app.use('/order', orderRoutesHandler);

//error should be at the end stages of the code
//any request that reaches the below lines of codes means that there is no logical 
//url founds above to handle client's http request
//so that must go through error handler

//for error handling
app.use((req, res, next) => {
    const error=new Error('Your URL request cannot be matched'); //error message objects
    error.status= 404;
    next(error);//this is for redirecting error responses
});

app.use((error, req, res, next) => {
    res.status(error.status || 500); //either the error status that we get from above un-handled request or just 500
    res.json({
        error: {
            errorMessage: error.message,
            statusCode: error.status
        }
    }); // generates the error json response
});

module.exports=app;