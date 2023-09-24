import inquirer from 'inquirer';
inquirer
    .prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st number",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2nd number",
    },
    {
        type: "list",
        name: "operation",
        message: "Select operation",
        choices: ["+", "-", "*", "/"],
    },
])
    .then((answers) => {
    if (answers.operation === "+") {
        const result = answers.num1 + answers.num2;
        console.log("sum", result);
    }
    else if (answers.operation === "-") {
        const result = answers.num1 - answers.num2;
        console.log("subtraction", result);
    }
    else if (answers.operation === "*") {
        const result = answers.num1 * answers.num2;
        console.log("multiplication", result);
    }
    else if (answers.operation === "/") {
        const result = answers.num1 / answers.num2;
        console.log("division", result);
    }
})
    .catch((error) => {
    if (error.isTtyError) {
        console.error("Prompt couldn't be rendered in the current environment");
    }
    else {
        console.error("Something else went wrong");
    }
});
