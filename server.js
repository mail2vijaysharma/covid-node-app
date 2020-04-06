const express = require("express");
const app = express();
const connectDb = require("./src/db-connection");
const bodyParser = require('body-parser');

const apiRoutes = require("./api-routes");


const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => res.send('Server is up and running!!!'));

app.use('/api', apiRoutes);

app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});
