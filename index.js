const TelegramBot = require('node-telegram-bot-api');
const {studyOptions} = require('./options');
const UserModel = require('./models');
const sequelize = require('./db');

const token = '2089800903:AAHfXESdQBHZwFl98-lZdQEOTvI0sPLvuLw';

const bot = new TelegramBot(token, {polling: true});

const chats = {}

const startStudy = async (chatId) => {
    await bot.sendMessage(chatId,`Выбери тему: `, studyOptions);
}

const start = () => {
const sdfsdfsdf= 'sdfsdf';
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Получить информацию'},
        {command: '/study', description: 'Выбрать темуsdfsdf'}
    ]);

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        try {
            if (text === '/start') {
                await bot.sendMessage(chatId, `✨Hello!`)
            }
            if (text === '/info') {
                await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}️, чтобы начать учиться вызови команду /study и выбери тему ⬇️`)
            }
            if (text === '/study') {
                return startStudy(chatId);
            }
    } catch (e) {
        return bot.sendMessage(chatId, `Произошла какая-то ошибочка!)`);
    }
    })
}

start();

// Клавиатура
//
// bot.onText(/\/start/, (msg) => {
//
//     const chatId = msg.chat.id;
//
//     bot.sendMessage(chatId, "Welcome", {
//         "reply_markup": {
//             "keyboard": [["Sample text", "Second sample"],   ["Keyboard"], ["I'm robot"]]
//         }
//     });
//
// });

