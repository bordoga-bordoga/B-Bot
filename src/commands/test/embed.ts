import { Command } from "discord-akairo";
import { Message, MessageEmbed } from "discord.js";


export default class TestEmbedCommand extends Command {
  public constructor () {
    super("testEmbed", {
      aliases: ["testembed", "tembed", "te"],
      category: "mod",
      description: "Sends a test embed message.",
    });
  }


  public async exec(message: Message): Promise<void> {
    const testEmbed = new MessageEmbed()
      .setDescription('Hey <@840518532894162955>. Welcome to the **Ask Yourself**🍉 Discord. Read through the <#840522988897435698> channel before engaging. Check out <#782491581429055519> for community updates. Enjoy the server!')
      .setThumbnail('https://cdn.discordapp.com/attachments/526211341489405972/840524898899066880/logo.png');
    message.channel.send(testEmbed);
  }
}
