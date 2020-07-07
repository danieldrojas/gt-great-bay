const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Maverick1963!", // Change based on your local machine
  database: "greatBayDB",
});

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId + "\n");
//     bid();

// });

const postItem = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your item?",
        name: "item",
      },
      {
        type: "input",
        message: "What is the starting bid?",
        name: "startBid",
      },
    ])
    .then((data) => {
      console.log(data);
      connection.connect((err) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
        createItem(data);
      });
    });
};

const bidOnItem = () => {
  connection.connect((err) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
  });
};

const createItem = (data) => {
  const { item, startBid } = data;
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO items SET ?",
    {
      itemName: item,
      currentBid: startBid,
    },
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " item created!\n");
    }
  );

  connection.end();
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
