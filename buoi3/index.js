
// function a(z,y,z) {
//     setTimeout(() => {
//         let xy = x+y;
//     b(xy,100,c);
//     },10);
// }
// function b(xy,z,c){
//     let xyz = xy*z;
//     c(xyz,200);
// }
// function c(xyz,k) {
//     console.log(xyz * k);
// }
// let xyzk = a(2 , 3, b);
// let z = b(xy, 100);

// let a = new Promise(function (resolve, reject){
//     let xy = 2 + 3;
//     resolve(xy);
// });
async function a() {
    let xy = await (2+3);
    let xyz = await (xy*100);
    let xyzt = await(xyz*200); 
    return xyzt;
}
console.log(a());
a().then((data) =>{
    console.log(data);
});

// a.then((data) => {
//     let xyz = data *100;
//     return xyz;
// })
// .then((data) =>{
//     console.log(data * 200);
// })
// .catch((err) => {
//     console.log("err", err);
// });
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello express js server");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
