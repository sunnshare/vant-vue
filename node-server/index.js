let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock
let Random = Mock.Random;
let app = express(); //实例化express

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  if (req.method.toLowerCase() == "options") {
    res.sendStatus(200); //让options尝试请求快速结束
  } else {
    next();
  }
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

app.use("/user/login", function (req, res) {
  if (Math.random(1) > 0.5) {
    res.json(
      Mock.mock({
        status: 200,
        data: {
          token: Random.string(20),
          username: "admin",
          authList: [
            { auth: "auth1", name: "auth1", path: "/profile/auth1" },
            { auth: "auth2", name: "auth2", path: "/profile/auth2" },
          ],
        },
      })
    );
  } else {
    res.json({
      status: 403,
      data: {
        message: "没有权限",
      },
    });
  }
});

app.use("/user/validate", function (req, res) {
  res.json(
    Mock.mock({
      status: 200,
      data: {
        token: Random.string(20),
        username: "admin",
        authList: [
          { auth: "auth1", name: "auth1", path: "/profile/auth1" },
          { auth: "auth2", name: "auth2", path: "/profile/auth2" },
        ],
      },
    })
  );
});

app.listen("3000", () => {
  console.log("监听端口 3000");
});
