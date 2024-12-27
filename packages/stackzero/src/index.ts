#!/usr/bin/env node

import { Command, program } from "commander";
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import figlet from "figlet";
import packageJson from "../package.json";

// program.version("1.0.0").description("My Node CLI");

// console.log(
//   chalk.magenta(figlet.textSync("stackzero", { horizontalLayout: "full" }))
// );

// program.action(() => {
//   inquirer
//     .prompt([
//       {
//         type: "list",
//         name: "choice",
//         message: "Choose an option:",
//         choices: ["Option 1", "Option 2", "Option 3"],
//       },
//     ])
//     .then((result) => {
//       const spinner = ora(`Doing ${result.choice}...`).start(); // Start the spinner

//       setTimeout(() => {
//         spinner.succeed(chalk.green("Done!"));
//       }, 3000);
//     });
// });

// program.parse(process.argv);

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

async function main() {
  // console.log(
  //   chalk.magenta(figlet.textSync("stackzero", { horizontalLayout: "full" }))
  // );
  const program = new Command()
    .name("stackzero")
    .description("add components and dependencies to your project")
    .version(
      packageJson.version || "0.0.1",
      "-v, --version",
      "display the version number"
    );

  program.parse();
}

main();
