const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Maverick1963!",
  database: "greatBayDB",
});

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     bid();

// });

const postItem = () => {
  connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  })
};

const bidOnItem = () => {
  connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  })
};

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose an option:",
      choices: ["Post an item", "Bid on an item", "Exit"],
      name: "choice",
    },
  ])
  .then((data) => {
    console.log(data);
    const { choice } = data;
    switch (choice) {
      case "Post an item":
        postItem();
        break;
      case "Bid on an item":
        bidOnItem();
        break;
      default:
          console.log("Bye");
          return process.exit(0);
    }
  });
