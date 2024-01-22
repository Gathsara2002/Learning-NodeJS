import { createConnection } from "mysql2";
import { log } from "node:console";

const db = createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "1234",
  database: "school",
});

db.connect((err) => {
  if (err) {
    log(err);
  } else {
    log("db connected");
  }
});
