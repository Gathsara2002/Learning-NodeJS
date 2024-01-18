import { log } from "node:console";
import { createServer } from "node:http";

createServer((req, res) => {
  res.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Infor</title>
        <link href="./index.css" rel="stylesheet" />
      </head>
      <body>
        <main class="main">
          <div class="card">
            <h1 class="name">Gathsara</h1>
            <div class="infor">
              <p>age is : 21</p>
              <p>class is : class 1</p>
            </div>
            <h3>Subjects</h3>
            <div class="subjects">
              <p>java</p>
            </div>
          </div>
        </main>
      </body>
    </html>
    `);
  res.end();
}).listen(4000, () => log("server running"));
