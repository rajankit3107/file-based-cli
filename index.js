import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";

const program = new Command();

program
  .name("file-based-cli")
  .description("Navigate through your files and check the details")
  .version("0.8.0");

program
  .command("count")
  .description("count the number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(chalk.red("Error reading file"));
      } else {
        const words = data.split(" ").length;
        console.log(
          chalk.green(`There are ${words} words in the ${file} file`)
        );
      }
    });
  });

program
  .command("count-s")
  .description("count sentences in the file")
  .argument("<file>", "file to count sentences")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) console.log(chalk.red("Error reading the senteces"));
      const senteces = data.split("\n").length;
      console.log(
        chalk.green(`There are ${senteces} sentences in ${file} file`)
      );
    });
  });

program
  .command("count-c")
  .description("count the number of characters in the file")
  .argument("<file>", "file to count characters")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) console.log(chalk.red("Error counting the characters"));
      const characters = data.length;
      console.log(
        chalk.green(`There are ${characters} characters in ${file} file`)
      );
    });
  });

program
  .command("info")
  .description("get info about a file")
  .argument("<file>", "file to get info")
  .action((file) => {
    fs.stat(file, (err, stats) => {
      if (err) return console.log(chalk.red("Error fetching file info"));
      console.log(chalk.cyan(`Size: ${stats.size} bytes`));
      console.log(chalk.cyan(`Created: ${stats.birthtime}`));
      console.log(chalk.cyan(`Modified: ${stats.mtime}`));
    });
  });

program
  .command("find")
  .description("search for a word in the file")
  .argument("<file>", "file to search in")
  .argument("<word>", "word to search")
  .action((file, word) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) return console.log(chalk.red("Error reading file"));
      const count = data.split(new RegExp(`\\b${word}\\b`, "gi")).length - 1;
      console.log(
        count > 0
          ? chalk.green(`✅ Found "${word}" ${count} times`)
          : chalk.yellow(`❌ "${word}" not found`)
      );
    });
  });

program.parse();
