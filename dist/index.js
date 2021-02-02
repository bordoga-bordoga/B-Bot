"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const bot_client_1 = __importDefault(require("./client/bot-client"));
const client = new bot_client_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBeUM7QUFDekMscUVBQTRDO0FBRTVDLE1BQU0sTUFBTSxHQUFjLElBQUksb0JBQVMsQ0FBQyxFQUFFLEtBQUssRUFBTCxjQUFLLEVBQUUsTUFBTSxFQUFOLGVBQU0sRUFBRSxDQUFDLENBQUM7QUFDM0QsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW4sIG93bmVycyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBCb3RDbGllbnQgZnJvbSAnLi9jbGllbnQvYm90LWNsaWVudCc7XG5cbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuLCBvd25lcnMgfSk7XG5jbGllbnQuc3RhcnQoKTtcbiJdfQ==