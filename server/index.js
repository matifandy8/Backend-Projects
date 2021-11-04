let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");
let mongoDb = require("./db");
const ytdl = require("ytdl-core");
const { Server } = require("socket.io");
const http = require("http");

const TodoRoute = require("./routes/todo.route");
const NBARoute = require("./routes/nba.route");



// DATABASE CONNECTION
mongoose.Promise = global.Promise;
mongoose
  .connect(mongoDb.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database connected!");
    },
    (error) => {
      console.log(error);
    }
  );

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

// ROUTES
app.use("/", TodoRoute);
app.use("/", NBARoute);



// SOCKET IO 
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


server.listen(4000, () => {
  console.log("SERVER RUNNING");
});

app.use(function (err, req, res, next) {
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
