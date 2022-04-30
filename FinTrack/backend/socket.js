const io = require("./server").io;
const addUser = require("./socketfncs").addUser;
const removeUser = require("./socketfncs").removeUser;
const allUsers = require("./socketfncs").allUsers;
const addExpense = require("./socketfncs").addExpense;
const getUsers = require("./socketfncs").getUsers;
const getfamily = require("./socketfncs").getfamily;
const saveLimit = require("./socketfncs").saveLimit;
io.on("connection", (socket) => {
  console.log("connected successfully");

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  socket.on("join", (info) => {
    console.log(info);
    const user = addUser(socket.id, info);

    // const users=allUsers()
    const users = getUsers(info.family);
    console.log(users);
    users.map((each) => {
      io.to(each.id).emit("info", users);
    });

    socket.on("addexpense", (expense) => {
      console.log(expense);
      addExpense(socket.id, expense);
      const users = getUsers(info.family);

      users.map((each) => {
        io.to(each.id).emit("info", users);
      });
    });

    socket.on("remove", () => {
      const family = getfamily(socket.id);
      removeUser(socket.id);
      const users = getUsers(family);
      users.map((each) => {
        io.to(each.id).emit("info", users);
      });
    });

    socket.on("savelimit", (limit) => {
      const family = getfamily(socket.id);
      const users = saveLimit(limit, family);

      users.map((each) => {
        io.to(each.id).emit("info", users);
      });
    });
  });
});
