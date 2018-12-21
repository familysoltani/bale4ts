import { config } from 'dotenv'
import * as Platform from '../index'
import { Logger } from '../src/utils/Logger'
config({ path: '.env' })
const Bot = Platform.BaleBot
Logger.log(process.env.BALE_TOKEN)
let bot = new Bot(process.env.BALE_TOKEN)

bot.hears(['name?', 'name', '/name', '/name2'], (message, responder) => {
  responder
    .reply('My name is sample bot!')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
})
