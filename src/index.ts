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

import { Client } from 'pg';

const client = new Client({
    connectionString: "link"
})

//async function to insert data into a table
async function insertData(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'mysecretpassword',
    });

    try {
        await client.connect();
        const insertQuery = `
        INSERT INTO users (username, email, password)
        VALUES ('username2', 'user3@gmail.com', 'user_password');
        `;
        const res = await client.query(insertQuery);
        console.log('Insert success:', res);
    } catch (err) {
        console.error('Error during the insertion:', err);
    } finally {
        await client.end();
    }
}

insertData();