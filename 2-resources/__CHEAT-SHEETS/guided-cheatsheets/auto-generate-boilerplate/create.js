let fs = require ('fs');

// let readMe = fs.readFileSync('file.txt', 'utf8').split('\n');
// 
// console.log(readMe,"readMe");
// 
//   











fs.appendFileSync("create.js",`let arr =[${ fs.readFileSync('file.txt', 'utf8').split('\n').toString()}]`, (err) => {
  if (err) console.log(err);
  console.log("Successfully Written to File.");
});

let arr =[./Amazon S3 A cheat sheet.html