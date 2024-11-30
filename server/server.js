import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
const salt = 10;
const  app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: 'plantdb'
})

if(db.connect){
    console.log("Connected")
} else {
    console.log("Not connected");
}

app.post('/register', (req, res)=>{
    const sql = "Insert Into users (email, username, password ) VALUES (?,?,?)";
    bcrypt.hash(req.body.password.tostring(), salt,(err, hash)=>{
        if (err) return res.json({Error:"Error for hashing"});
            const values = [
                req.body.name,
                req.body.email,
                req.body.password,
                req.body.mobile
            ]
            db.query(sql, [values], (err, result) =>{
                if (err) return res.json({Error :"Inserting data error"});
                return res.json({Status:"Success"});
            })
    })
})
app.listen(3002, () =>{
    console.log("Runing")
})