import * as Platform from '../index'
import { Logger } from '../src/utils/Logger'
const Bot = Platform.BaleBot
Logger.log(process.env.BALE_TOKEN)
let bot = new Bot(process.env.BALE_TOKEN)

bot.hears(['name?', 'name', '/name', '/name2'], (message, responder) => {
  responder
    .reply('My name is sample bot!')
    .then(res => {
      Logger.log(res)
    })
    .catch(err => {
      console.log(err)
    })
})
