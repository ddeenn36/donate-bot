const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });
const webAppUrl = 'https://astonishing-cat-d65e6c.netlify.app/';

async function start() {
	bot.on('message', async (msg) => {
		const chatId = msg.chat.id;
		const text = msg.text;
	
		if (text === '/start') {
			await bot.sendMessage(chatId, 'Hello!', {
				reply_markup: {
					keyboard: [
						[{text: 'Open donate app', web_app: {url: webAppUrl}}]
					]
				}
			});
		}
	});

	bot.onText(/\/start \w/, async (msg) => {
		const text = msg.text;
		const arg = text.split(' ')[1];

		await bot.sendMessage(msg.chat.id, 'Make a donation!', {
			reply_markup: {
				inline_keyboard: [
					[{text: 'Donate', web_app: {url: webAppUrl+arg}}]
				]
			}
		});
	});
}

start();