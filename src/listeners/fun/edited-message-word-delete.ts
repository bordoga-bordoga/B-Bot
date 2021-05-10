import { Listener } from "discord-akairo";
import { Message, TextChannel } from "discord.js";


export default class EditedMessageWordDeleteListenr extends Listener {
  public constructor () {
    super("editedMessageWordDelete", {
      emitter: "client",
      category: "client",
      event: "messageUpdate",
    });
  }


  public async exec(oldMessage: Message, editedMessage: Message): Promise<void> {
    editedMessage = editedMessage.partial ? await editedMessage.fetch() : editedMessage
    const targetWords = ["ain'teasy", "ain’teasy", "ainteasy", "isn'teasy", "isn’teasy", "isnteasy"];
    const targetMessage = editedMessage.content.replace(/\s+/g, '').toLowerCase();
    //const ignoredMemebers = ['484373389692108801'];
    for (var i = 0; i < targetWords.length; i++) {
      if (targetMessage.includes(targetWords[i])) {
        /*for (var u = 0; u < ignoredMemebers.length; u++)
          if (message.author.id == ignoredMemebers[u]) return message.reply("You are BLACK (aka safe!!!)");*/
        editedMessage.delete();
        console.log(`DELETED A MESSAGE\n
        Server: ${editedMessage.guild.name}\n
        Channel: #${(editedMessage.channel as TextChannel).name}\n
        Author: ${editedMessage.author.username}#${editedMessage.author.discriminator}\n
        Reason: Contained "${editedMessage.content}"`);
      }
    }
  }
}
