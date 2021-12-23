import * as vscode from 'vscode';
import { executeRunCommand } from './vscode/execute-run-command';


/**
 * The channel we'll be writing our output to.
 */
const OUTPUT_CHANNEL_NAME = 'just';

/**
 * The command key for running a just recipe.
 * 
 * This needs to match up in two places in our `package.json`.
 */
const RUN_RECIPE_COMMAND_KEY = 'just.run';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "justfile" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand(RUN_RECIPE_COMMAND_KEY, async () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        const outputChannel = vscode.window.createOutputChannel(OUTPUT_CHANNEL_NAME);
        await executeRunCommand(outputChannel);
    });
    

    context.subscriptions.push(disposable);
}

/**
 * Fires when our extension dies.
 */
export function deactivate() {
  // nothing to do
}
