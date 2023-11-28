const inquirer = await import('inquirer');

async function promptForText() {
  const answer = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'TEXT: Enter up to (3) Characters:',
  });
  return answer.text;
}

async function promptForTextColor() {
  const answer = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'TEXT COLOR: Enter a color keyword (OR a hexadecimal number):',
  });
  return answer.textColor;
}

async function promptForShape() {
  const answer = await inquirer.prompt({
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  });
  return answer.shapeType;
}

async function promptForShapeColor() {
  const answer = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):',
  });
  return answer.shapeColor;
}

module.exports = { promptForText, promptForTextColor, promptForShape, promptForShapeColor };