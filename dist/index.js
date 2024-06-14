"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const telegraf_1 = require("telegraf");
const express_1 = __importDefault(require("express"));
const WEBHOOK_PATH = 'https://7a9b-67-2-163-197.ngrok-free.app';
const PORT = 3000;
require('dotenv').config();
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
bot.use((0, telegraf_1.session)());
bot.start((ctx) => {
    return ctx.reply('Hello World!');
});
const app = (0, express_1.default)();
app.use(bot.webhookCallback(WEBHOOK_PATH));
bot.telegram.setWebhook('https://7a9b-67-2-163-197.ngrok-free.app');
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
console.log('Bot is running');
//# sourceMappingURL=index.js.map