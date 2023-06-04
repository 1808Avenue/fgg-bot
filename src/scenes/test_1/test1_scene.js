import { Scenes, Markup } from 'telegraf';
import questions from './test1_questions.js';
import responseStatus from '../../../helpers.js';

export const test1Question1 = new Scenes.BaseScene(questions.question1.sceneId);
export const test1Question2 = new Scenes.BaseScene(questions.question2.sceneId);
export const test1Question3 = new Scenes.BaseScene(questions.question3.sceneId);
export const test1Question4 = new Scenes.BaseScene(questions.question4.sceneId);
export const test1Question5 = new Scenes.BaseScene(questions.question5.sceneId);
export const test1Question6 = new Scenes.BaseScene(questions.question6.sceneId);
export const test1Question7 = new Scenes.BaseScene(questions.question7.sceneId);
export const test1Question8 = new Scenes.BaseScene(questions.question8.sceneId);
export const test1Question9 = new Scenes.BaseScene(questions.question9.sceneId);
export const test1Question10 = new Scenes.BaseScene(questions.question10.sceneId);
export const test1Final = new Scenes.BaseScene('test1_final');

// QUESTION 1
test1Question1.enter(async (ctx) => {
  await ctx.reply(`[1/${Object.keys(questions).length}] ${questions.question1.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question1.options.a.option, questions.question1.options.a.id)],
      [Markup
        .button.callback(questions.question1.options.b.option, questions.question1.options.b.id)],
      [Markup
        .button.callback(questions.question1.options.c.option, questions.question1.options.c.id)],
      [Markup
        .button.callback(questions.question1.options.d.option, questions.question1.options.d.id)],
    ],
  ));

  test1Question1.action(questions.question1.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer1 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question2.sceneId);
  });
  test1Question1.action(questions.question1.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer1 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question2.sceneId);
  });
  test1Question1.action(questions.question1.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer1 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question2.sceneId);
  });
  test1Question1.action(questions.question1.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer1 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question2.sceneId);
  });
});

// QUESTION 2
test1Question2.enter(async (ctx) => {
  await ctx.reply(`[2/${Object.keys(questions).length}] ${questions.question2.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question2.options.a.option, questions.question2.options.a.id)],
      [Markup
        .button.callback(questions.question2.options.b.option, questions.question2.options.b.id)],
      [Markup
        .button.callback(questions.question2.options.c.option, questions.question2.options.c.id)],
      [Markup
        .button.callback(questions.question2.options.d.option, questions.question2.options.d.id)],
    ],
  ));

  test1Question2.action(questions.question2.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer2 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question3.sceneId);
  });
  test1Question2.action(questions.question2.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer2 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question3.sceneId);
  });
  test1Question2.action(questions.question2.options.c.id, async (instanceCtx) => {
    instanceCtx.session.answer2 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question3.sceneId);
  });
  test1Question2.action(questions.question2.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer2 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question3.sceneId);
  });
});

// QUESTION 3
test1Question3.enter(async (ctx) => {
  await ctx.reply(`[3/${Object.keys(questions).length}] ${questions.question3.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question3.options.a.option, questions.question3.options.a.id)],
      [Markup
        .button.callback(questions.question3.options.b.option, questions.question3.options.b.id)],
      [Markup
        .button.callback(questions.question3.options.c.option, questions.question3.options.c.id)],
      [Markup
        .button.callback(questions.question3.options.d.option, questions.question3.options.d.id)],
    ],
  ));

  test1Question3.action(questions.question3.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer3 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question4.sceneId);
  });
  test1Question3.action(questions.question3.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer3 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question4.sceneId);
  });
  test1Question3.action(questions.question3.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer3 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question4.sceneId);
  });
  test1Question3.action(questions.question3.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer3 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question4.sceneId);
  });
});

// QUESTION 4
test1Question4.enter(async (ctx) => {
  await ctx.reply(`[4/${Object.keys(questions).length}] ${questions.question4.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question4.options.a.option, questions.question4.options.a.id)],
      [Markup
        .button.callback(questions.question4.options.b.option, questions.question4.options.b.id)],
      [Markup
        .button.callback(questions.question4.options.c.option, questions.question4.options.c.id)],
      [Markup
        .button.callback(questions.question4.options.d.option, questions.question4.options.d.id)],
    ],
  ));

  test1Question4.action(questions.question4.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer4 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question5.sceneId);
  });
  test1Question4.action(questions.question4.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer4 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question5.sceneId);
  });
  test1Question4.action(questions.question4.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer4 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question5.sceneId);
  });
  test1Question4.action(questions.question4.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer4 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question5.sceneId);
  });
});

// QUESTION 5
test1Question5.enter(async (ctx) => {
  await ctx.reply(`[5/${Object.keys(questions).length}] ${questions.question5.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question5.options.a.option, questions.question5.options.a.id)],
      [Markup
        .button.callback(questions.question5.options.b.option, questions.question5.options.b.id)],
      [Markup
        .button.callback(questions.question5.options.c.option, questions.question5.options.c.id)],
      [Markup
        .button.callback(questions.question5.options.d.option, questions.question5.options.d.id)],
    ],
  ));

  test1Question5.action(questions.question5.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer5 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question6.sceneId);
  });
  test1Question5.action(questions.question5.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer5 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question6.sceneId);
  });
  test1Question5.action(questions.question5.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer5 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question6.sceneId);
  });
  test1Question5.action(questions.question5.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer5 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question6.sceneId);
  });
});

// QUESTION 6
test1Question6.enter(async (ctx) => {
  await ctx.reply(`[6/${Object.keys(questions).length}] ${questions.question6.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question6.options.a.option, questions.question6.options.a.id)],
      [Markup
        .button.callback(questions.question6.options.b.option, questions.question6.options.b.id)],
      [Markup
        .button.callback(questions.question6.options.c.option, questions.question6.options.c.id)],
      [Markup
        .button.callback(questions.question6.options.d.option, questions.question6.options.d.id)],
    ],
  ));

  test1Question6.action(questions.question6.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer6 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question7.sceneId);
  });
  test1Question6.action(questions.question6.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer6 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question7.sceneId);
  });
  test1Question6.action(questions.question6.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer6 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question7.sceneId);
  });
  test1Question6.action(questions.question6.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer6 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question7.sceneId);
  });
});

// QUESTION 7
test1Question7.enter(async (ctx) => {
  await ctx.reply(`[7/${Object.keys(questions).length}] ${questions.question7.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question7.options.a.option, questions.question7.options.a.id)],
      [Markup
        .button.callback(questions.question7.options.b.option, questions.question7.options.b.id)],
      [Markup
        .button.callback(questions.question7.options.c.option, questions.question7.options.c.id)],
      [Markup
        .button.callback(questions.question7.options.d.option, questions.question7.options.d.id)],
    ],
  ));

  test1Question7.action(questions.question7.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer7 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question8.sceneId);
  });
  test1Question7.action(questions.question7.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer7 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question8.sceneId);
  });
  test1Question7.action(questions.question7.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer7 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question8.sceneId);
  });
  test1Question7.action(questions.question7.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer7 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question8.sceneId);
  });
});

// QUESTION 8
test1Question8.enter(async (ctx) => {
  await ctx.reply(`[8/${Object.keys(questions).length}] ${questions.question8.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question8.options.a.option, questions.question8.options.a.id)],
      [Markup
        .button.callback(questions.question8.options.b.option, questions.question8.options.b.id)],
      [Markup
        .button.callback(questions.question8.options.c.option, questions.question8.options.c.id)],
      [Markup
        .button.callback(questions.question8.options.d.option, questions.question8.options.d.id)],
    ],
  ));

  test1Question8.action(questions.question8.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer8 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question9.sceneId);
  });
  test1Question8.action(questions.question8.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer8 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question9.sceneId);
  });
  test1Question8.action(questions.question8.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer8 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question9.sceneId);
  });
  test1Question8.action(questions.question8.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer8 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question9.sceneId);
  });
});

// QUESTION 9
test1Question9.enter(async (ctx) => {
  await ctx.reply(`[9/${Object.keys(questions).length}] ${questions.question9.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button.callback(questions.question9.options.a.option, questions.question9.options.a.id)],
      [Markup
        .button.callback(questions.question9.options.b.option, questions.question9.options.b.id)],
      [Markup
        .button.callback(questions.question9.options.c.option, questions.question9.options.c.id)],
      [Markup
        .button.callback(questions.question9.options.d.option, questions.question9.options.d.id)],
    ],
  ));

  test1Question9.action(questions.question9.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer9 = responseStatus.CORRECT;
    await instanceCtx.scene.enter(questions.question10.sceneId);
  });
  test1Question9.action(questions.question9.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer9 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question10.sceneId);
  });
  test1Question9.action(questions.question9.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer9 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question10.sceneId);
  });
  test1Question9.action(questions.question9.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer9 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter(questions.question10.sceneId);
  });
});

// QUESTION 10
test1Question10.enter(async (ctx) => {
  await ctx.reply(`[10/${Object.keys(questions).length}] ${questions.question10.question}`);
  await ctx.reply('Выберите ответ:', Markup.inlineKeyboard(
    [
      [Markup
        .button
        .callback(questions.question10.options.a.option, questions.question10.options.a.id)],
      [Markup
        .button
        .callback(questions.question10.options.b.option, questions.question10.options.b.id)],
      [Markup
        .button
        .callback(questions.question10.options.c.option, questions.question10.options.c.id)],
      [Markup
        .button
        .callback(questions.question10.options.d.option, questions.question10.options.d.id)],
    ],
  ));

  test1Question10.action(questions.question10.options.a.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer10 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter('test1_final');
  });

  test1Question10.action(questions.question10.options.b.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer10 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter('test1_final');
  });
  test1Question10.action(questions.question10.options.c.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer10 = responseStatus.INCORRECT;
    await instanceCtx.scene.enter('test1_final');
  });
  test1Question10.action(questions.question10.options.d.id, async (instanceCtx) => {
    instanceCtx.session.userAnswers.answer10 = responseStatus.CORRECT;
    await instanceCtx.scene.enter('test1_final');
  });
});

// FINAL
test1Final.enter(async (ctx) => {
  const { userAnswers } = ctx.session;
  const correctAnswers = Object.keys(userAnswers)
    .filter((answer) => userAnswers[answer] === responseStatus.CORRECT);

  await ctx.reply('Благодарю вас, вы закончили тест!');
  await ctx.replyWithHTML(`<b>Ваш результат: </b>\n\n  1.  ${userAnswers.answer1 === responseStatus.CORRECT ? '✅' : '❌'}  6.  ${userAnswers.answer6 === responseStatus.CORRECT ? '✅' : '❌'}
  2.  ${userAnswers.answer2 === responseStatus.CORRECT ? '✅' : '❌'}  7.  ${userAnswers.answer7 === responseStatus.CORRECT ? '✅' : '❌'}
  3.  ${userAnswers.answer3 === responseStatus.CORRECT ? '✅' : '❌'}  8.  ${userAnswers.answer8 === responseStatus.CORRECT ? '✅' : '❌'}
  4.  ${userAnswers.answer4 === responseStatus.CORRECT ? '✅' : '❌'}  9.  ${userAnswers.answer9 === responseStatus.CORRECT ? '✅' : '❌'}
  5.  ${userAnswers.answer5 === responseStatus.CORRECT ? '✅' : '❌'}  10. ${userAnswers.answer10 === responseStatus.CORRECT ? '✅' : '❌'}`);
  await ctx.reply(`✅ Правильных ответов: ${correctAnswers.length}`);

  if (correctAnswers.length >= 8) {
    await ctx.reply('Поздравляю вы прошли тест!');
    await ctx.scene.leave();
  } else {
    await ctx.reply('К сожалению вы не прошли тест!');
    await ctx.reply('Попробуйте еще раз!');
    await ctx.scene.leave();
  }
});
