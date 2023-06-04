import {
  Markup, Scenes, session, Telegraf,
} from 'telegraf';
import * as dotenv from 'dotenv';
import {
  test1Question1, test1Question2, test1Question3, test1Question4, test1Question5,
  test1Question6, test1Question7, test1Question8, test1Question9, test1Question10,
  test1Final,
} from './src/scenes/test_1/test1_scene.js';
import {
  test2Question1, test2Question2, test2Question3, test2Question4, test2Question5,
  test2Question6, test2Question7, test2Question8, test2Question9, test2Question10,
  test2Final,
} from './src/scenes/test_2/test2_scene.js';
import { commands } from './helpers.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const test1Scenes = new Scenes.Stage([
  test1Question1, test1Question2, test1Question3, test1Question4, test1Question5,
  test1Question6, test1Question7, test1Question8, test1Question9, test1Question10,
  test1Final]);

const test2Scenes = new Scenes.Stage([
  test2Question1, test2Question2, test2Question3, test2Question4, test2Question5,
  test2Question6, test2Question7, test2Question8, test2Question9, test2Question10,
  test2Final]);

// START
bot.start(async (ctx) => {
  const userName = ctx.from.first_name;
  await ctx.reply(userName ? `Добро пожаловать ${userName}` : 'Добро пожаловать');
  await ctx.reply('Выберите тест:', Markup.inlineKeyboard(
    [
      [Markup.button.callback('1. Факты о сети и ресторане', 'btn_test_1')],
      [Markup.button.callback('2. Фишки и стандарты зала', 'btn_test_2')],
    ],
  ));
});

bot.command('test', async (ctx) => {
  await ctx.reply('Выберите тест:', Markup.inlineKeyboard(
    [
      [Markup.button.callback('1. Факты о сети и ресторане', 'btn_test_1')],
      [Markup.button.callback('2. Фишки и стандарты зала', 'btn_test_2')],
    ],
  ));
});
bot.help(async (ctx) => {
  await ctx.reply(`Команды:\n ${commands}`);
});

bot.action('btn_test_1', async (ctx) => {
  await ctx.reply(`Тест № 1: "Факты о сети FGG и ресторане Южанин"\n\nОписание:\n
Вопросы составлены на основе информации из нового сервис-бука и общеизвестных фактах о компании FGG и вашем ресторане.
Выберите один верный вариант ответа, соответствующий заданному вопросу.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Начать', 'btn_start_test_1')],
    ],
  ));
});

bot.action('btn_test_2', async (ctx) => {
  await ctx.reply(`Тест № 2: "Фишки и стандарты зала"\n\nОписание:\n
Вопросы составлены на основе информации из нового сервис-бука и общепринятых стандартов сервиса.
Выберите один верный вариант ответа, соответствующий заданному вопросу.`, Markup.inlineKeyboard(
    [
      [Markup.button.callback('Начать', 'btn_start_test_2')],
    ],
  ));
});

bot.use(session());

bot.use(test1Scenes.middleware());
bot.action('btn_start_test_1', async (ctx) => {
  ctx.session.userAnswers = {};
  await ctx.scene.enter('test1-question1');
});

bot.use(test2Scenes.middleware());
bot.action('btn_start_test_2', async (ctx) => {
  ctx.session.userAnswers = {};
  await ctx.scene.enter('test2-question1');
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
