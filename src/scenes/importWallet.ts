import { Scenes, Markup } from 'telegraf'
import { WizardScene } from 'telegraf/typings/scenes'

const importWalletScene = new WizardScene(
    'importWallet',
    (ctx) => {
        ctx.reply('What is your name?')
     
    }
)