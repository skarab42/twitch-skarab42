import * as vscode from "vscode";

export function activate({ subscriptions }: vscode.ExtensionContext) {
  subscriptions.push(
    vscode.commands.registerCommand("twitch-skarab42.twitch-login", () => {
      console.log("prout :)");
    })
  );
}

export function deactivate() {
  console.log("deactivated");
}
