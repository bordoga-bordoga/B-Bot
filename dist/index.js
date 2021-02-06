"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const bot_client_1 = __importDefault(require("./client/bot-client"));
const client = new bot_client_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
