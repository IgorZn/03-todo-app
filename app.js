const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const connectDB = require("./conf/db");

// Routers file
const toDoRoutes = require('./routes/toDo.routes');

// Load config
dotenv.config({ path: './conf/config.env' })

// Init app
const app = express();

// Body parser mdlw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// View setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Mount routers
app.use('/todo', toDoRoutes);

app.get('/', (req, res, next) => {
    res.render('index');
});

// Connect to DB
connectDB();

// Start server
const PORT = process.env.PORT || 3001
const server = app.listen(
    PORT,
    console.log(`Server running in http://localhost:${PORT}`)
);

process.on('unhandledRejection', (err, promose) => {
    console.log(`Err: ${err.message}`)
    // Exit
    server.close( () => process.exit(1))
});