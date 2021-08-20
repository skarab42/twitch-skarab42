import * as vscode from "vscode";
import { twitchLoginAction } from "./twitchLoginAction";

export function activate(context: vscode.ExtensionContext) {
  const { subscriptions } = context;

  subscriptions.push(
    vscode.commands.registerCommand(
      "twitch-skarab42.twitch-login",
      twitchLoginAction,
      context
    )
  );
}

export function deactivate() {
  console.log("deactivated");
}
