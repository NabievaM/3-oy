import {
  Action,
  Command,
  Ctx,
  Hears,
  On,
  Start,
  Update,
} from 'nestjs-telegraf';
import { Markup, Context } from 'telegraf';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  @Start()
  async onStart(@Ctx() ctx: Context) {
    return this.botService.start(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    return this.botService.onContact(ctx);
  }

  @Command('stop')
  async onStop(@Ctx() ctx: Context) {
    return this.botService.OnStop(ctx);
  }

  // @On('photo')
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ('photo' in ctx.message) {
  //     console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
  //     );
  //   }
  // }

  // @On('video')
  // async onVideo(@Ctx() ctx: Context) {
  //   if ('video' in ctx.message) {
  //     console.log(ctx.message.video);
  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On('sticker')
  // async onSticker(@Ctx() ctx: Context) {
  //   if ('sticker' in ctx.message) await ctx.reply('👍');
  // }

  // @On('animation')
  // async onAnimation(@Ctx() ctx: Context) {
  //   await ctx.reply('Animate');
  // }

  // // @On('contact')
  // // async onContact(@Ctx() ctx: Context) {
  // //   if ('contact' in ctx.message) {
  // //     await ctx.reply(String(ctx.message.contact.phone_number));
  // //     await ctx.reply(String(ctx.message.contact.first_name));
  // //     await ctx.reply(String(ctx.message.contact.last_name));
  // //     await ctx.reply(String(ctx.message.contact.user_id));
  // //   }
  // // }

  // @On('location')
  // async onLocation(@Ctx() ctx: Context) {
  //   if ('location' in ctx.message) {
  //     await ctx.reply(String(ctx.message.location.latitude));
  //     await ctx.reply(String(ctx.message.location.longitude));
  //     await ctx.replyWithLocation(
  //       Number(ctx.message.location.latitude),
  //       Number(ctx.message.location.longitude),
  //     );
  //   }
  // }

  // @On('voice')
  // async onVoice(@Ctx() ctx: Context) {
  //   if ('voice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.voice.duration));
  //   }
  // }

  // //Telegram orqali to'lovlarda ishlatiladi
  // @On('invoice')
  // async onInvoice(@Ctx() ctx: Context) {
  //   if ('invoice' in ctx.message) {
  //     await ctx.reply(String(ctx.message.invoice.title));
  //   }
  // }

  // @On('document')
  // async onDoc(@Ctx() ctx: Context) {
  //   if ('document' in ctx.message) {
  //     await ctx.reply(String(ctx.message.document.file_name));
  //   }
  // }

  // @Hears('hi')
  // async hears(@Ctx() ctx: Context) {
  //   await ctx.reply('Hey there');
  // }

  // @Command('info')
  // async info(@Ctx() ctx: Context) {
  //   await ctx.reply('Information');
  // }

  // @Command('inline_keyboard')
  // async inlineButton(@Ctx() ctx: Context) {
  //   const inlinekeyboard = [
  //     [
  //       { text: 'Button1', callback_data: 'button1' },
  //       { text: 'Button2', callback_data: 'button2' },
  //       { text: 'Button3', callback_data: 'button3' },
  //     ],
  //     [{ text: 'Button4', callback_data: 'button4' }],
  //     [{ text: 'Button5', callback_data: 'button5' }],
  //   ];
  //   ctx.reply('Choose a inline button:', {
  //     reply_markup: {
  //       inline_keyboard: inlinekeyboard,
  //     },
  //   });
  // }

  // @Action('button1')
  // async onActionButton1(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button1!');
  // }

  // @Action('button2')
  // async onActionButton2(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed Button2!');
  // }

  // @Action(/button+[1-9]/g)
  // async onActionAnyButton(@Ctx() ctx: Context) {
  //   ctx.reply('You pressed any Button!');
  // }

  // @Command('main_keyboard')
  // async mainButton(@Ctx() ctx: Context) {
  //   ctx.reply(`Choose a <b>main</b> button`, {
  //     parse_mode: 'HTML',
  //     ...Markup.keyboard([
  //       ['bir', 'ikki', 'uch'],
  //       ["to'rt"],
  //       [Markup.button.contactRequest('Telefon raqamni yuborish')],
  //       [Markup.button.locationRequest('Location yuborush')],
  //     ])
  //       .oneTime()
  //       .resize(),
  //   });
  // }
  // @Hears('bir')
  // async onBirButton(@Ctx() ctx: Context) {
  //   ctx.reply('Bir bosildi');
  // }

  // @Hears('ikki')
  // async onIkkiButton(@Ctx() ctx: Context) {
  //   ctx.reply('Ikki bosildi');
  // }

  // @On('text')
  // async onText(@Ctx() ctx: Context) {
  //   if ('text' in ctx.message) {
  //     if (ctx.message.text == 'salom') await ctx.reply('hello');
  //     else await ctx.reply(ctx.message.text);
  //   }
  // }

  // @On('message')
  // async onMessage(@Ctx() ctx: Context) {
  //   console.log(ctx.botInfo);
  //   console.log(ctx.chat.id);
  //   console.log(ctx.chat.type);
  //   if ('content' in ctx.message) console.log(ctx.message.content);
  // }
}
