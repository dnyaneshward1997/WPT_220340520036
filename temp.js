const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const mysql = require("mysql2");

const { response } = require("express");
app.use(cors());

JSON.stringify(result);

//http://localhost:8081/poc2?xyz=3

const connection = mysql.createConnection({
  host: "localhost",
  user: "dnyaneshwar",
  password: "cdac",
  database: "beed",
  port: 3306,
});

var result;
app.get("/getBook", function (req, res) {
  let bookid = req.body.bookid;
  let bookname = req.body.bookname;
  let price = req.body.price;

  console.log(req.body.bookid + req.body.bookname + req.body.price);
  con.query(
    'insert into book values("2205","harry potter",700)',
    [bookid, bookname, price],
    (err, res1) => {
      if (err) {
        console.log("error occured");
      } else {
        console.log(res1);
      }
    }
  );
});

app.get("/getBooks", function (req, res) {
  con.query("select bookid,bookname,price from book", (err, rows) => {
    if (err) {
      console.log("error occured");
    } else {
      if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++)
          console.log(
            rows[i].bookid + " " + rows[i].bookname + " " + rows[i].price
          );
      } else {
        console.log("book not found");
      }
    }
    res.send(rows);
  });
});

app.listen(8081, function () {
  console.log("server listening at port 8081...");
});
