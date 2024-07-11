"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stage = exports.startupScene = void 0;
const telegraf_1 = require("telegraf");
require('dotenv').config();
const bot = new telegraf_1.Telegraf(process.env.BOT_TOKEN);
const userMenuButton = {
    text: 'Coordinape',
    type: 'web_app',
    web_app: {
        url: 'https://bp-tg-miniapp.vercel.app/'
    }
};
let chatId;
exports.startupScene = new telegraf_1.Scenes.WizardScene('importWallet', async (ctx) => {
    await ctx.reply('Step 1: What is your name?');
    return ctx.wizard.next();
}, async (ctx) => {
    await ctx.reply('Step 2: What is your email?');
    return ctx.wizard.next();
}, async (ctx) => {
    await ctx.reply('Step 3: What is your username?');
    return await ctx.scene.leave();
});
exports.stage = new telegraf_1.Scenes.Stage([exports.startupScene]);
bot.use((0, telegraf_1.session)());
bot.use(exports.stage.middleware());
bot.start((ctx) => {
    if (ctx.chat) {
        chatId = ctx.chat?.id;
    }
    bot.telegram.setChatMenuButton({ chatId: chatId, menuButton: userMenuButton });
    // ctx.scene.enter('importWallet')
});
bot.launch();
//# sourceMappingURL=index.js.map