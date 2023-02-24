#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

async function myBanner() {
  await showBanner("\nWords Counter", chalk.blue("Welcome!"), "green");
}
await myBanner();

async function countWords() {
  let userInput: { enterPara: string } = await inquirer.prompt([
    {
      name: "enterPara",
      type: "string",
      message: "Enter the text/Paragraph: ",
    },
  ]);

  const { enterPara } = userInput;
  function wordsCount() {
    let words_Counter = enterPara.split(" ").filter((words) => words !== "");
    console.log(chalk.bgCyanBright(`Total words: ${words_Counter.length}`));
  }
  wordsCount();

  function characCount() {
    let strAdd = "";
    let i = 0;
    while (i < enterPara.length) {
      if (enterPara[i] != " ") {
        strAdd = strAdd + enterPara[i];
      }
      i++;
    }
    console.log(`Total Character: ${strAdd.length}`);
  }
  characCount();
  startAgain();
}

async function startAgain() {
  let againStart = await inquirer.prompt({
    type: "list",
    name: "restartAgain",
    choices: [`Yes`, `No`],
    message: chalk.bgBlue("\nDo you want to continue? "),
  });

  let user_Reqd = againStart.restartAgain;

  if (user_Reqd === `Yes`) {
    console.clear();
    countWords();
  } else if (user_Reqd === `No`) {
    console.log(
      chalk.blueBright(
        `~~~~~~~~~~~~THANK YOU FOR USING CURRENCY EXCHANGE APP~~~~~~~~~~~~`
      )
    );
  }
}
countWords();
