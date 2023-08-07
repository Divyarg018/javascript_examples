// let balajiBath = function() {
//     console.log(`\nBalji woke up`);
//     console.log(`Balji is Bathing`);
//     console.log(`Balji is Ready`);
// }

// let kishanBath = function() {
//     console.log(`\nKishan woke up`);
//     console.log(`Kishan is Bathing`);
//     console.log(`Kishan is Ready`);
// }

// balajiBath();
// kishanBath();

// kishanBath();
// balajiBath();


let balajiBath = function () {
    console.log(`\nBalji woke up`);
    console.log(`Balji is Bathing`);
    console.log(`Balji is Ready`);
}

let kishanBath = function () {
    setTimeout(() => { console.log(`\nKishan woke up`) }, 2000);
    setTimeout(() => { console.log(`Kishan is Bathing`) }, 3000);
    setTimeout(() => { console.log(`Kishan is Ready`) }, 5000);
}

kishanBath();
setTimeout(balajiBath, 7000);