import { Command } from "discord-akairo";
import { Message, GuildMember } from "discord.js";


export default class BanCommand extends Command {
  public constructor () {
    super("kick", {
      aliases: ["kick", "k"],
      category: "mod",
      channel: "guild",
      clientPermissions: ["KICK_MEMBERS"],
      args: [{ id: "member", type: "member" }],
    });
  }


  public async exec(
    message: Message,
    { member }: { readonly member: GuildMember },
  ): Promise<string> {
    return member
      .kick()
      .then((kickedMember) =>
        Promise.resolve(
          `<@${message.author.id}> has kicked **${kickedMember.user.tag}**`,
        ),
      );
  }
}

