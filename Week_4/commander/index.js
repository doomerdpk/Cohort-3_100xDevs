// Imports the Command class from the Commander library, which helps build CLI tools
const { Command } = require("commander");
//Creates a new instance of the Command class to build our CLI
const program = new Command();

//CLI meta data
program
  //Sets the CLI name shown in help texts
  .name("string-util")
  //Adds a description for the overall CLI
  .description("CLI to some JavaScript string utilities")
  //Defines the version number (shown with -V/--version flags)
  .version("0.8.0");

program
  // Defines a new subcommand called "split"
  .command("split")
  //Description shown when users view help for this command
  .description("Split a string into substrings and display as an array")
  //Specifies a required input string argument (denoted by angle brackets)
  .argument("<string>", "string to split")
  //Creates a boolean flag that when present, will show only the first split element
  .option("--first", "display just the first substring")
  // Creates an option that takes a value (denoted by angle brackets)
  // Short (-s) and long (--separator) flags
  // Default value is comma if not specified
  // Description explains its purpose
  .option("-s, --separator <char>", "separator character", ",")
  // The function that executes when "split" command is used
  // Receives the string argument (str) and options object
  // Uses split() with optional limit (for --first flag)
  // Outputs the result to console
  .action((str, options) => {
    console.log(options);
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

//Triggers actual parsing of process.argv (command-line arguments)
//Executes the appropriate command and action based on user input
program.parse();

//CLI's to run:

//1. node index.js help
//2. node index.js -h/--help split
//3. node index.js -V/--version split
//4. node index.js split "a b c" --first
//5. node index.js split "a b c" -s ' '
//6. node index.js split "a b c" -s ' ' --first
