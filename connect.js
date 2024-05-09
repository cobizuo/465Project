// run using node connect.js
// type in browser: localhost:4000/
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 4000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fitness'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    // Handle signup logic here
    const { name, height, weight, email, password } = req.body;

    const userData = {
        name,
        height,
        weight,
        email,
        password
    };

    connection.query('INSERT INTO users SET ?', userData, (error, results) => {
        if (error) {
            console.error('Error inserting user:', error);
            res.json({ success: false });
        } else {
            console.log('User inserted:', results);
            res.json({ success: true });
        }
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
        if (error) {
            console.error('Error fetching user:', error);
            res.json({ success: false });
        } else if (results.length > 0) {
            console.log('User found:', results[0]);
            res.json({ success: true });
        } else {
            console.log('User not found');
            res.json({ success: false });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
