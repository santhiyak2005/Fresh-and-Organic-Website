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
    fs.writeFile(`./DB/${account.email}.json`, JSON.stringify(account), function (err) {
        if (err) {
            console.log(err);
        }
    });
}).listen(3000);
