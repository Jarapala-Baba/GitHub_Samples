const mysql=require('mysql');
const pool=mysql.createConnection(
    {
        
        host: 'localhost',
        user: 'babu',
        password: 'babu',
        database: 'babu',
    }
)
pool.connect();
let countrydb={};

countrydb.all= () =>
{
   
    return new Promise((resolve, reject)=> {
        pool.query('SELECT * FROM details', (err, results)=>{
            console.log('pool instance created!');
            if(err)
            {
               return reject(new Error(`Whoops! ${err}`));
            }
            console.log(`result is ${result}`);
            return resolve(results);
        });
    });
};

module.exports= countrydb;