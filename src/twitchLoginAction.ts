import * as vscode from "vscode";
// import { ApiClient } from 'twitch';
// import { StaticAuthProvider } from 'twitch-auth';

// const clientId = '123abc';
// const accessToken = 'def456';
// const authProvider = new StaticAuthProvider(clientId, accessToken);
// const apiClient = new ApiClient({ authProvider });

export function twitchLoginAction(this: vscode.ExtensionContext) {
  console.log("prout :)", this);
}
