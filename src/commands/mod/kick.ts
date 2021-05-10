import { Command } from "discord-akairo";
import { TextChannel } from "discord.js";
import { Message, GuildMember } from "discord.js";


export default class KickCommand extends Command {
  public constructor () {
    super("kick", {
      aliases: ["kick", "k"],
      category: "mod",
      channel: "guild",
      //clientPermissions: ["KICK_MEMBERS"],
      args: [
        {
          id: "members",
          type: (message) => message.mentions.members
        }
      ],
    });
  }


  public exec(message: Message, member: GuildMember): void {
    member.kick()
      .then((kickedMember) =>
        ((kickedMember.guild.systemChannel) as TextChannel).send(`<@${message.author.id}> has kicked **${kickedMember.user.tag}**`));
  }
}
