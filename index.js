import fileRead from "./libs/readFile.js";
import { log } from "node:console";
import fileWrite from "./libs/writeFile.js";
import inquirer from "inquirer";

//write file that get from another file reading - task 1

// fileRead("read.txt", (data) => {
//   const whatToDo = String(data).split(" ");
//   const command = whatToDo[0];
//   const content = whatToDo.slice(1, whatToDo.length - 1).join(" ");
//   const file = whatToDo[whatToDo.length - 1];

//   if (command === "write") {
//     fileWrite(file, content, (d) => log(d));
//   }
// });

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "Username : ",
//       message: "Input username : ",
//     },
//   ])
//   .then((res) => log(res))
//   .catch((err) => log(err));

//output -
// ? Input username :  Gathsara
//{ 'Username : ': 'Gathsara' }

const info = [];

(async () => {
  do {
    const res = await inquirer.prompt([
      {
        type: "input",
        message: "Enter Student Name",
        name: "name",
      },
      {
        type: "number",
        message: "Enter Student age",
        name: "age",
      },
      {
        type: "input",
        message: "Enter Student city",
        name: "city",
      },
      {
        type: "list",
        message: "Enter Student Class",
        choices: ["class 1", "class 2", "class 3", "class 4"],
        name: "stuclass",
      },
      {
        type: "checkbox",
        message: "Enter Student Subject",
        choices: ["java", "javascript", "python", "golang", "dart"],
        name: "subject",
      },
      {
        type: "confirm",
        message: "Have more Students",
        name: "check",
      },
    ]);

    const { check, ...data } = res;
    info.push(data);
    if (!res.check) {
      break;
    }
  } while (true);

  log(info);
})();
