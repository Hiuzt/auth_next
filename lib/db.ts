// import mysql from 'serverless-mysql';

// const db = mysql({
//     config: {
//         host: "localhost",
//         port: 3306,
//         database: "cvmaker",
//         user: "root",
//         password: ""
//     }
// });

// interface ExecuteQueryProps {
//     query: string;
//     values?: any[];
// }

// export default async function executeQuery({ query, values }: ExecuteQueryProps) {
//     try {
//         const results = await db.query(query, values);
//         await db.end();
//         return results;
//     } catch (error) {
//         console.log(error)
//         return { error };
//     }
// }

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma