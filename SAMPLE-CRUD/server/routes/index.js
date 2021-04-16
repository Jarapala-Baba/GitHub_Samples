const express=require('express');
const router=express.Router();
const countrydb=require('../db');
countrydb.all();

router.get('/',( req,res,next) => {
  try {
      let results=  countrydb.all();
      console.log(results);
      return res.json(results);
  } catch (error) {
     console.log(error);
     res.sendStatus(500);
  }
  console.log('INSIDE');
  res.json({test:test});
})

module.exports=router;