const { Client } = require('pg');
require('dotenv').config();


const client = new Client({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: 5432,
});

// Connect to the database
client.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
  })
  .catch(err => {
    console.error('Connection error', err.stack);
  });

module.exports = client;