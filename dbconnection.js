// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'Athang33!',
//   port: 5432,
// });

// console.log("hii")
// try {
//     pool.on('connect', () => {
//         console.log('Connected to the PostgreSQL database');
//       });
//       console.log("tt")
    
// } catch (error) {
//     console.log("aae")
// }


// module.exports = pool;

const { Client } = require('pg');
require('dotenv').config();
// const process = require('node:process')
// console.log( process.env.password)
// Create a client instance with the connection details
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