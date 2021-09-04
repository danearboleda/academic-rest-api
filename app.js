/**Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodeParser = bodyParser.urlencoded(
    {extended: true}
);

app.use(jsonParser);
app.use(urlEncodeParser);

const ipFn = require("./middleware/getIpAddress");
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.");
});

//user Routes Loading
const userRoutes = require("./routes/user.routes");
userRoutes(app);

//token moddleware
tkFn = require("./middleware/verifyToken");
app.use(tkFn);

//Student Routes Loading
const studentRoutes = require("./routes/student.routes");
studentRoutes(app);

//Teacher Routes Loading
const teacherRoutes = require("./routes/teacher.routes");
teacherRoutes(app);

//Period Routes Loading
const periodRoutes = require("./routes/period.routes");
periodRoutes(app);

//course Routes Loading
const courseRoutes = require("./routes/course.routes");
courseRoutes(app);

app.listen(port, () => {
    console.log("Server is running...")
});