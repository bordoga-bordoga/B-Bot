import { Command } from "discord-akairo";
import { Message } from "discord.js";


export default class Bumper extends Command {
  public constructor () {
    super("bump", {
      aliases: ["bump"],
      category: "ember",
    });
  }


  public async exec(message: Message): Promise<void | Message> {
    if (!message.member.roles.cache.some(role => role.id === '813764117738291201')) {
      message.member.roles.add('813764117738291201');
      message.util.send(`<@${message.author.id}> you are now a member of the **Bump Squad**. Welcome ||*Meow* :cat:||! Type \`!d bump\` in <#804409884366864384> to bump the server.`);
    } else {
      message.member.roles.remove('813764117738291201');
      message.util.send(`\`${message.author.username}\` couldn’t handle the bump, peak!`);
    }
  }
}
