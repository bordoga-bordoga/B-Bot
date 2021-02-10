/*import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";


export default class SEPsearch extends Command {
  public constructor () {
    super("sep-search", {
      aliases: ["sep"],
      category: "fun",
      description: {
        content: "Searches the topic you want on Stanford Encyclopedia of Philosophy",
        usage: "sep <topic>",
        examples: [
          "sep modal logic",
          "SEP fisrt order logic",
          "SEP God's existence"
        ]
      },
      ratelimit: 3
    });
  }


  public exec(message: Message): Promise<Message> {
    const SEPreultsEmbed = new MessageEmbed()
      .setDescription(Math.round(this.client.ws.ping).toString())
      .setColor(Math.floor(Math.random() * 16777215).toString(16));
    return (message.util?.send(SEPreultsEmbed) ?? message.channel.send(SEPreultsEmbed));
  }
}
*/
