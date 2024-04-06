import express from "express"
import pg from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/db", async (req, res, next) => {
    try {
        const result = await sql`SELECT * FROM test_table`
        res.status(200).send(result.rows)
    } catch (error) {
        
    }

})



app.listen(5050, () => console.log("Server ready on port 3000."));

export default app;