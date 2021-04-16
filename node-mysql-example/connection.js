const mysql=require('mysql');

const myConnection=mysql.createConnection(
    {
        host:"localhost",
        user:"babu",
        password:"babu",
        database:"world",
        multipleStatements:true,
        insecureAuth:true
    }); 
    

    myConnection.connect((err)=>
    {
        if(!err)
        {
            console.log('connected to db');
        }
        else console.log(`Failed to Connect due to : ${err}`);
    });

    module.exports=myConnection;
