const express=require('express');
const Router=express.Router();
const myConnection=require('../connection');

let countrys={};

Router.get("/countrys",(req,res)=>
{
    console.log("Countrys url invoked");
    myConnection.query("SELECT * FROM country",(err,result,fields)=>
    {
        if(!err)
        {
            // console.log(`Result is :${express.json(result)}`);
            countrys['all']=result;
            res.send(countrys);
        }
        else console.log(`Error is : ${err} `);
    })
    // res.send({test});
});

Router.get("/countrys/:id",(req,res)=>
{
    console.log("Countrys by id  url invoked");
    myConnection.query("SELECT * FROM country where Code=?",[req.params.id],(err,result,fields)=>
    {
        if(!err)
        {
            // console.log(`Result is :${express.json(result)}`);
            res.send(result);
        }
        else console.log(`Error is : ${err} `);
    })
    // res.send(req.params.id);
});


Router.getAll=()=>
{
    console.log("testing");
}
module.exports=Router;