function a(x,y) {
    setTimeout(() =>{
        c = x + y;
        b(c, 100);
    }, 10);
}

function b(xy , z) {
    console.log(xy * z);
}

let xyz = a(2, 3, function (xy, z) {
    console.log(xy * z);
});
