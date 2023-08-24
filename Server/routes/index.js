var express = require("express");
var router = express.Router();
const dynamoDB = require("../bin/aws");
require("dotenv").config();
const key = process.env.ACCESSKEYID;
/* GET home page. */
router.get("/", function (req, res, next) {
    var data = {
        TableName: "metaProject",
        Item: {
            dataType: "user",
            uuid: "280a8a4d-a27f-4d01-b031-2a003cc4c035",
            email: "test2@test.com",
            name: "홍길순",
            password: "1q2w3e4r",
        },
    };
    dynamoDB.put(data, (e, d) => {
        console.log(e, d);
    });
    res.render("index", { title: "Express" });
});

module.exports = router;
