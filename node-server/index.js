let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock

let app = express(); //实例化express

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/slides", function (req, res) {
  setTimeout(() => {
    res.json(
      Mock.mock({
        status: 200,
        "data|3-4": [
          {
            "key|+1": 1,
            "title|1": [
              "角色精湛主题略荒诞",
              "理由太短 是让人不安",
              "疑信参半 却无比期盼",
              "你的惯犯 圆满",
              "别让纠缠 显得 孤单",
            ],
          },
        ],
      })
    );
  }, 2000);
});

app.listen("3000", () => {
  console.log("监听端口 3000");
});
