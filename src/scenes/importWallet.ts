import { Scenes, Markup } from 'telegraf'


export const startupScene = new Scenes.WizardScene<Scenes.WizardContext>(
    'importWallet',
    async (ctx) => {
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

