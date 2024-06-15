import { Telegraf, session, Context, Scenes } from 'telegraf'
import { AppContext } from './utils/types'
import { importWalletScene, importWalletStep } from './scenes/importWallet'

require('dotenv').config()

const bot = new Telegraf<AppContext>(process.env.BOT_TOKEN as string)

// const stage = new Scenes.Stage([importWalletStep])
bot.use(session())
bot.use(stage.middleware())

bot.start((ctx) => {
    return ctx.reply('Hello World!')
})

bot.action('import-wallet', (ctx) => {
    
})


