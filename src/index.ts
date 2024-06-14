import { Telegraf, session, Context } from 'telegraf'
import { AppContext, SessionData } from './utils/types'


require('dotenv').config()

const bot = new Telegraf<AppContext>(process.env.BOT_TOKEN as string)

bot.use(session())

bot.start((ctx) => {
    return ctx.reply('Hello World!')
})
