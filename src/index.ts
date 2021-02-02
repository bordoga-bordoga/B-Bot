import { token, owners } from './config';
import BotClient from './client/bot-client';

const client: BotClient = new BotClient({ token, owners });
client.start();
