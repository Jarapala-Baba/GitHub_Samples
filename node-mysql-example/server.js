
const express=require('express');
const http = require('http')
const bodyParser=require('body-parser');
const peopleRoutes=require('./routes/people');
// const myConnection=require('./connection');

const app=express();
app.server = http.createServer(app)
// app.use(bodyParser.json);

app.use(bodyParser.json({
 
}))
app.use('/api',peopleRoutes);
app.server.listen(8000);

// const app = express()
// app.server = http.createServer(app)
// app.use('/api',peopleRoutes)

// app.server.listen(process.env.PORT || 8000, () => {
//   console.log(`Started on port ${app.server.address().port}`)
// })

module.exports = app