import { input, select } from '@inquirer/prompts';
import cfonts from 'cfonts';
import path from 'path';
import { config } from './config.js';
import { isFolderAvailable } from './lib/folders/is-available.js';
import { cp as copy } from 'fs/promises';

// print welcome message
cfonts.say('benny', {
    font: '3d',
    colors: ['yellowBright'],
    align: 'center',
    space: true,
});

async function createBlock() {
  // ask block type
  const blockType = await select({
    message: 'What type of block would you like to create?',
    choices: ['audio', 'note', 'output'],
  });

  // ask block name
  const blockName = await input({
    message: 'What is the name of the block?',
  });

  // The path where the new block will be created
  const newBlockPath = path.resolve(
    config.outputFolder,
    blockType,
    blockName
  );

  // If the folder already exists, ask the user to choose a different name
  if(!isFolderAvailable(newBlockPath)) {
    console.log(` - folder ${newBlockPath} already exists`);
    console.log(' - Please choose a different name');
    return createBlock();
  }

  // The path where the template is stored
  const templatePath = path.resolve(
    config.templatesFolder.blocks,
    blockType
  );

  // copy the template to the new block path
  await copy(templatePath, newBlockPath, { recursive: true });

  console.log(` - block ${blockName} created successfully`);
  console.log(` - block created at ${newBlockPath}`);
  console.log(' - happy patching!');
}

createBlock();