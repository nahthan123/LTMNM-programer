// let a = 10
// console.log(a)



// // /*or let abc = (x) => { return x;} */
// // function abc(x){
// //     return x;
// // }

// // console.log((a));


//  const path = require("node:path")

//  let url = "data/db/sql.sql";

// //  let ps = path.basename(url);
// //  console.log(ps);
// let ps = path.



// const fs = require("node:fs");

// let content = "hello node js";

// fs.writeFile("demo.txt",content,(err) => {
//     console.log(err);
// });

// fs.readFile("demo.txt", "utf18", (err,data) =>{
//     console.log(data);
// });



//cai server

const http = require("node:http");

let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end("<h1> hello server NodeJS</h1>");
});

server.listen(3000, () =>{
    console.log("server started!!!");
});
// let content = "hello file node js";~

// fs.writeFile("demo.txt", content, (err) => {
//   console.log(err);
// });
// fs.readFile("demo.txt", "utf8", (err, data) => {
//     console.log(data);
//   });