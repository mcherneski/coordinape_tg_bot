import { Telegraf, session, Context, Scenes } from 'telegraf'
import { AppContext } from './utils/types'
import { type MenuButton, type MenuButtonWebApp } from 'telegraf/typings/core/types/typegram'


require('dotenv').config()

const bot = new Telegraf<Scenes.WizardContext>(process.env.BOT_TOKEN as string)

const userMenuButton: MenuButton = {
    text: 'Coordinape',
    type: 'web_app',
    web_app: {
        url: 'https://coordinape-bot-webapp.vercel.app/'
    }
}   

let chatId: number

export const startupScene = new Scenes.WizardScene<Scenes.WizardContext>(
    'importWallet',
    async (ctx) => {
        console.log('Arbitrary change')
        await ctx.reply('Step 1: What is your name?')
        return ctx.wizard.next()
    },
    async (ctx) => {
        await ctx.reply('Step 2: What is your email?')
        return ctx.wizard.next()
    },
    async (ctx) => {
        await ctx.reply('Step 3: What is your username?')
        return await ctx.scene.leave()
    }
)

export const stage = new Scenes.Stage<Scenes.WizardContext>([startupScene])


bot.use(session())
bot.use(stage.middleware())

bot.start((ctx) => {
    if (ctx.chat)
        {
            chatId = ctx.chat?.id as number
        }
        
    bot.telegram.setChatMenuButton({chatId: chatId, menuButton: userMenuButton})
    
    ctx.reply('Welcome to Coordinape Bot! Please click the button below to access the Coordinape Web App.')
    // ctx.scene.enter('importWallet')
})

bot.launch()