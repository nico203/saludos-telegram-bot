import { Telegraf  } from 'telegraf';

require('dotenv').config();

const PORT = process.env.PORT || 5501;
const URL = process.env.URL || 'https://desolate-springs-14317.herokuapp.com/';
const BOT_TOKEN = process.env.BOT_TOKEN || '';

const options = ['Slds', 'slds', 'Jaja salu2', 'Jaja slds']

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => ctx.reply('Hola! jaja slds'));
bot.help((ctx) => ctx.reply('salu2'));
bot.on('message', (ctx) => {
  if (ctx.chat && ctx.message?.text?.match(/saludos|slds|salu2/gmi)) {
    ctx.telegram.sendMessage(ctx.chat.id, options[Math.floor(Math.random() * options.length)], {
      reply_to_message_id: ctx.message.message_id
    });
  }
});
bot.launch({
  webhook: {
    domain: URL,
    port: PORT as any
  }
});
