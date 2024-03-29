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
            res.status(400).send("Неправильное имя пользователя или пароль.")
        }
    } catch (error) {
        console.log(error)
    }
});

app.post('/register', async (req, res) => {
    req.body.username;
    req.body.password;
    try {
        const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const userValid = /^[A-Za-z\d]{5,20}$/;
        if(!regex.test(req.body.password)){
            res.status(400).send("Пароль должен содержать не менее 8 символов, включая хотя бы одну заглавную букву и одну цифру.");
            return;
        }
        if(!userValid.test(req.body.username)){
            res.status(400).send("Имя пользователя должно содержать от 5 до 20 символов.");
            return;
        }
        const result = await db.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`, [req.body.username, req.body.password]);
        res.send(result.rows);
    } catch (error) {
        console.log(error)
        res.status(400).send("Имя пользователя уже используется." );
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})