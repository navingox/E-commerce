const express=require('express');
const app=express();
const bodyParser =require('body-parser');
const cors=require('cors');
const categoryRoute=require('./routes/category');
const ordersRoute=require('./routes/orders');
const recommendedRoute=require('./routes/recommended');
const searchRoute=require('./routes/search');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}))

app.use('/category',categoryRoute);
app.use('/orders',ordersRoute);
app.use('/recommended',recommendedRoute);
app.use('/search',searchRoute);


const port = 8000;
app.listen(port,()=>{
    console.log(`server Running port : ${port}`);
})