const mysql = require('mysql');
const dotenv = require('dotenv');

let instance=null;

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.database,
    port: process.env.DB_PORT
});

connection.connect((err)=>
{
    if(err)
    {console.log('Error in Connection '+err)}
    else console.log('Connected')
})



class DbService
{
    static getDbServiceInstance()
    {
        console.log('DB Service class instance')
        return instance ? instance : new DbService();
    }

    async  getAllData()
    {
        try {
            const response =await new Promise((resolve, reject)=>
            {
                const sqlQuery="SELECT * FROM country";
                connection.query(sqlQuery,(err,results,fields)=>
                {
                    if(err)
                    { console.log('Connection problem due to :'+err)
                        reject(new Error(err.message));
                    }
                    else{
                        console.log(`Results from DB :${sqlQuery}`)
                    resolve(results);
                    }
                });
                console.log("Responce is "+response);
            });
            return response;
        } catch (error) {
            console.log(`Error in getting All Data : ${error}`)
        }
    };
}

module.exports=DbService;