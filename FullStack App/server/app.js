const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const dbService = require('./dbService')
const bodyParser = require('body-parser');
const db = dbService.getDbServiceInstance();


dotenv.config();

app.use(cors());
app.use(bodyParser.json({}));
app.use(express.urlencoded({ expected: false }))


// Create
app.post('/insert', (request, response) => {
})


// Read
app.get('/getAll', (request, response) => {
    const result = db.getAllData();

    if(result.length!==0)
    {
     response.send(result);
    }
    else err=>console.log('Error in app get All '+err);
})


//update

// Delete

app.listen(process.env.PORT, () => {
    console.log(`Server Listened to the PORT: ${process.env.PORT}`);
})