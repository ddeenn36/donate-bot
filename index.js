const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const options = {
  polling: true
};
const bot = new TelegramBot(token, options);
// const webAppUrl = 'https://astonishing-cat-d65e6c.netlify.app/';

bot.onText(/\/start/i, (msg) => {
	bot.sendMessage(msg.chat.id, 'Hi');
});

// bot.onText(/\/start/, async (msg) => {
// 	await bot.sendMessage(chatId, 'Hello!', {
// 		reply_markup: {
// 			reply_markup: [
// 				[{text: 'Open donate app', web_app: {url: webAppUrl}}]
// 			]
// 		}
// 	});
// });

// bot.onText(/\/start .+/, async (msg) => {
// 	const text = msg.text;
// 	const arg = text.split(' ')[1];

// 	await bot.sendMessage(msg.chat.id, 'Make a donation!', {
// 		reply_markup: {
// 			inline_keyboard: [
// 				[{text: 'Donate', web_app: {url: webAppUrl+arg}}]
// 			]
// 		}
// 	});
// });