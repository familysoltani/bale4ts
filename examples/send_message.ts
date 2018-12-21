import * as Platform from '../index'
const Bot = Platform.BaleBot
const TextMessage = Platform.TextMessage
const User = Platform.User

const bot = new Bot(process.env.BALE_TOKEN)
const msg = new TextMessage("Hi, I'm connected :). This is new message.")
const user = new User(
  parseInt(process.env.BALE_USER_ID),
  process.env.BALE_USER_ACCESS
)

bot.send(msg, user)
