import { config } from 'dotenv'
import * as Platform from '../index'
config({ path: '.env' })
const Bot = Platform.BaleBot

let bot = new Bot(process.env.BALE_TOKEN)

bot.hears(['name?', 'name', '/name'], (message, responder) => {
  responder
    .reply('My name is sample bot!')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
})
