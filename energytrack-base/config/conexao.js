import { createPool, PoolConnection } from "mysql2";
import mysql from "mysql2/promise";

export const conexao = mysql.createPool ({
    host:process.DB_HOST,
    port:process.DB_PORT,
    user:process.DB_USER,
    password:process.DB_PASSWORD,
    name:process.DB_NAME,

    limitConnection: 10,
    awaitConnection: true
    
})



