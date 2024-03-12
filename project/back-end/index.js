import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "tournaments",
    password: "fallenlearndb",
    port: 5432,
  });
db.connect();

const app = express();
const port = 3004;
app.use(cors());


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.post('/login', async (req, res) => {
    req.body.username;
    req.body.password;
    try {
        const result  = await db.query(`SELECT * FROM users WHERE username = $1 AND password = $2`, [req.body.username, req.body.password]);
        if(result.rows.length > 0){
            res.send(result.rows);
        }else{
            res.send("No users found");
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
});

app.post('/register', async (req, res) => {
    req.body.username;
    req.body.password;
    try {
        const result = await db.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`, [req.body.username, req.body.password]);
        res.send(result.rows);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})