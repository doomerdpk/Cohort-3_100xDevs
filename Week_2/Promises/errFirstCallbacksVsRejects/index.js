//Error First Callbacks

const fs = require("fs");

// function callback(err, data) {
//   if (err) {
//     console.log("Error Reading File!");
//   } else {
//     console.log(data);
//   }
// }

// fs.readFile("a.txt", "utf-8", callback);

//Rejects in Promises

function readFilePromisified(filePath, encoding) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, encoding, function (err, data) {
      if (err) {
        reject("Error is: " + err);
      } else {
        resolve(data);
      }
    });
  });
}

function dataInsideFile(data) {
  console.log(data);
}
function ErrReadingFile(err) {
  console.log(err);
}

readFilePromisified("a.txt", "utf-8")
  .then(dataInsideFile)
  .catch(ErrReadingFile);
