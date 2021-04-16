const express=require('express');
const app=express();
const apiRouter=require("./routes");
// app.use(express.json);

app.use('/api',apiRouter);

app.listen(process.env.PORT||"5000",()=> 
{
    console.log(`Server is running on port ${process.env.PORT||'5000'}`);
})