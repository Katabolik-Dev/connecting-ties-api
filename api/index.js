import express from "express"
import pg from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'


const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/db", async (req, res, next) => {
    try {
        const result = await sql`SELECT * FROM test_table`
        res.status(200).send(result.rows)
    } catch (error) {
        next(error)
    }
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type("text/plain");
    res.status(err.status || 500);
    res.send(err.message);
});



const PORT = process.env.PORT

app.listen(PORT || 5050, () => {

    console.log(`Server ready on port ${PORT}`)

});

export default app;