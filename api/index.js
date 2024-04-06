import express from "express"
import pg from 'pg'
import cors from 'cors'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import { sql } from '@vercel/postgres'

// Parsing middleware and .env config
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
// Pool config
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})
// Middleware for intercepting any request that's not GET
const allowOnlyGetRequests = (req, res, next) => {

    if (req.method !== 'GET') {
      return res.status(405).send('Method Not Allowed');
    }
    next(); // pass control to the next middleware/route handler
  };
app.use(allowOnlyGetRequests);


app.get("/", (req, res) => res.send("Express on Vercel"));

app.get("/news", async (req, res, next) => {
    try {
        const result = await sql`SELECT * FROM news`
        res.status(200).send(result.rows)
    } catch (error) {
        next(error)
    }
})

// Final error middleware
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.type("text/plain");
    res.status(err.status || 500);
    res.send(err.message);
});


// PORT declaration
const PORT = process.env.PORT
app.listen(PORT || 5050, () => {

    console.log(`Server ready on port ${PORT}`)

});

export default app;