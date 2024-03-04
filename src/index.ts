// Write a function to create a users table in your database.

// import { Client } from 'pg';

// const client = new Client({
//     connectionString: "Link of DB"
// })

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
//     `)
//     console.log(result);
// }
// createUsersTable();


// Create a function that lets you INSERT a data in a table.

// import { Client } from 'pg';

// const client = new Client({
//     connectionString: "link"
// })

// //async function to insert data into a table
// async function insertData() {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'mysecretpassword',
//     });

//     try {
//         await client.connect();
//         const insertQuery = `
//         INSERT INTO users (username, email, password)
//         VALUES ('username2', 'user3@gmail.com', 'user_password');
//         `;
//         const res = await client.query(insertQuery);
//         console.log('Insert success:', res); // Output insert result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end();
//     }
// }

// insertData();


// Function getUser that lets you fetch data from the database given in email as input.

import { Client } from 'pg';

async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'posrgres',
        user: 'Mayank',
        password: 'password'
    })

    try {
        await client.connect();
        const query = `SELECT * FROM users WHERE email = $1`
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end();  // Close client connection
    }
}

getUser('user5@gmail.com').catch(console.error);