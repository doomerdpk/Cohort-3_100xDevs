//Code Review: https://chatgpt.com/share/679e8887-599c-8000-8571-f9127f1559b0
const { Command } = require("commander");
const program = new Command();

const fs=require('fs');
const path = require("path");


function readFileContent(filepath, count)
{
    fs.readFile(filepath,"utf-8",(err,data)=>{
        if(err)
        {
            console.error("Error retrieving data or File not exist");
        }
        else
        {
            count(data);
        }
      })
}

program
  .name("count-words-sentences")
  .description("CLI to count words/sentences in a file")
  .version("1.0.0");

program
  .command("countw")
  .description("Count the number of words present in the file")
  .argument("<string>", "filename to count words")
  .action((filename, options) => {
   const filepath=path.join(__dirname,filename);
   readFileContent(filepath,(data)=>{
    console.log(data.split(" ").length)
   })
  });


program
  .command("counts")
  .description("Count the number of lines present in the file")
  .argument("<string>", "filename to count sentences")
  .action((filename, options) => {
    const filepath=path.join(__dirname,filename);
   readFileContent(filepath,(data)=>{
    console.log(data.split("\n").length)
   })
  });
program.parse();

//Commands to run:
//1. node index.js help
//2. node index.js countw -h/--help
//3. node index.js countw -V/--version
//4. node index.js counts-h/--help
//5. node index.js counts-V/--version
//6. node index.js countw "a.txt"
//7. node index.js countw "c.txt"
//8. node index.js counts "b.txt"
//9. node index.js counts "c.txt"