// Assignment(Both Callback Approach and Promisified Version)

// Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

//Callback Approach

const fs = require("fs");

// fs.readFile("b.txt", "utf-8", function (err, data) {
//   if (err) {
//     console.log("Error reading the file");
//   } else {
//     const req_data = data.trim();

//     fs.writeFile("b.txt", req_data, function (err) {
//       if (err) {
//         console.log("Error writing data");
//       } else {
//         console.log("Data is successfully written to the file!");
//       }
//     });
//   }
// });

//Promisified Version: use async await syntax

function cleanFilePromisified(filepath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filepath, "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        const req_data = data.trim();
        fs.writeFile(filepath, req_data, function (err) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  });
}

async function clean() {
  try {
    await cleanFilePromisified("c.txt");
    console.log("Data written successfully");
  } catch (err) {
    console.log("Error is:" + err);
  }
}

clean();
