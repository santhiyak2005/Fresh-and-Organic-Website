const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
/*http
  .createServer(function (req, res) {
    console.log(req.body);
  })
  .listen(3000);*/
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.post("", function requestHandler(req, res) {
    let account = req.body;
    fs.readFile(`./DB/${account.email}.json`, "utf-8", function (err, jsonString) {
        if (err) {
            res.json({ bool: "wrong account" });
        } else {
            let fileFromDb = JSON.parse(jsonString);
            if (fileFromDb.password === account.password) {
                res.json({ bool: "true" });
            } else {
                res.json({ bool: "wrong password" });
            }
        }
    });
}).listen(4000);
