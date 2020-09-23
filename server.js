const http= require('http');

//either listen to PORT( actual sever specified port) or 8080(any port u type it will listen to that)
const port= process.env.PORT || 8080; 



//auto reloades whenever u made changes to ur codes 
//we only need this for devlopment purpose only so '--save-dev'
//npm i --save-dev nodemon
//then
//add in package.json > scripts > "start": "nodemon server.js"
//then
//in terminal type npm start instead of node server.js
//now after that just see logs below whenever u change ur code ;)

//request handler
const app=require('./app');

//creating our own server
const server = http.createServer(app);

//make server listen to the specified PORT
server.listen(port);