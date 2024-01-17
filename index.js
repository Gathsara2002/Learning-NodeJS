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

(async () => {
  do {
    const res = await inquirer.prompt([
      {
        type: "input",
        name: "Name",
        message: "Input name",
      },
      {
        type: "confirm",
        name: "Check",
        message: "Have other values",
      },
    ]);

    log(res);
    if (!res.Check) {
      break;
    }
  } while (true);
})();
