const express = require("express");
const dot = require("dotenv").config()
const socketio = require("socket.io")
const session = require("express-session")
const { sequelize } = require("./models");
const path = require("path")
const cors = require("cors")
const SignUpRouter = require("./routers/singupRouter")
const LoginRouter = require("./routers/loginRouter")
const UploadRouter = require("./routers/upload")
const app = express()

app.use(cors({
  origin : "http://127.0.0.1:5501",
  credentials : true,
  
}))
app.use(
    session({
        secret : process.env.SESSION_KEY,
        resave :false,
        saveUninitialized :false
    })
)
sequelize.sync({ force: false }).then((e) => {
    console.log("연결 완료");
  })
  .catch((err) => {
    console.log(err);
  })


app.use(express.urlencoded({ extended: false }));
app.use("/img",express.static(path.join(__dirname,"uploads")))

app.use('/signup',SignUpRouter)
app.use('/login',LoginRouter)
app.use(express.json())
app.use("/upload",UploadRouter)

app.listen(8000, () => {
    console.log("server on!");
  });
  