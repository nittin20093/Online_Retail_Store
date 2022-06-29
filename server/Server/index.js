const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "nnnyyyoo7",
    database: "market",
});

app.post("/update", (req,res) => {
    const query = req.body.query;
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});
app.post("/q1_call_embedded", (req,res) => {
    const query = "SELECT customer_id, MAX(price) AS p FROM Orders GROUP BY customer_id ORDER BY p desc;";
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post("/q2_call_embedded", (req,res) => {
    const minvaluee = req.body.minvalue;
    const query = `select * from customer join orders on phone = orders.Customer_ID where orders.total_amount>${minvaluee}`;
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post("/q3_call_embedded", (req,res) => {
    const minvaluee = req.body.minvalue;
    const maxvaluee = req.body.maxvalue;
    const query = `select * from coupons where (min_cart_value between ${minvaluee} and ${maxvaluee}) order by discount_percent;`;
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post("/q4_call_embedded", (req,res) => {
    const N = req.body.n;
    const query=`select * from product p1 where ${N}=(select count(distinct sp) from product p2 where p2.sp>p1.sp);`
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post("/q5_call_embedded", (req,res) => {
    const minvaluee = req.body.minvalue;
    const query = `SELECT * FROM orders JOIN payments ON payments.order_ID = orders.order_ID WHERE (mode='net-banking' AND total_amount>${minvaluee} AND payment_status='successful');`;
    db.query(query,(err,result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(3003, () => {
    console.log('Port binded to 3003');
});