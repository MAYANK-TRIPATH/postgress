// Function that lets you insert data in the Users table

// import {PrismaClient} from "@prisma/client";

// const prisma = new PrismaClient();


// async function insertUser(username: string, password: string, firstname: string, lastname: string) {
//     const res = await prisma.user.create({
//         data: {
//             username,
//             password,
//             firstname,
//             lastname
//         }
//     })
//     console.log(res);
// }

// insertUser("admin1", "123456", "Mayank", "tripathi")


// Function that lets you fetch the details of a user given their email

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where: {
            username: username
        }
    })
    console.log(user);
}

getUser("admin1");