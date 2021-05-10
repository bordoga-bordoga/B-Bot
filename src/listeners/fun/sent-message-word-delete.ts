import { Listener } from "discord-akairo";
import { Message, TextChannel } from "discord.js";


export default class SentMessageWordDeleteListenr extends Listener {
  public constructor () {
    super("sentMessageWordDelete", {
      emitter: "client",
      category: "client",
      event: "message",
    });
  }


  public async exec(message: Message): Promise<void> {
    message = message.partial ? await message.fetch() : message
    const targetWords = ["ain'teasy", "ain’teasy", "ainteasy", "isn'teasy", "isn’teasy", "isnteasy"];
    const targetMessage = message.content.replace(/\s+/g, '').toLowerCase();
    //const ignoredMemebers = ['484373389692108801'];
    for (var i = 0; i < targetWords.length; i++) {
      if (targetMessage.includes(targetWords[i])) {
        /*for (var u = 0; u < ignoredMemebers.length; u++)
          if (message.author.id == ignoredMemebers[u]) return message.reply("You are BLACK (aka safe!!!)");*/
        message.delete();
        console.log(`DELETED A MESSAGE\n
        Server: ${message.guild.name}\n
        Channel/category: #${(message.channel as TextChannel).name}\n
        Author: ${message.author.username}#${message.author.discriminator}\n
        Reason: Contained "${message.content}"`);
      }
    }
  }
}
