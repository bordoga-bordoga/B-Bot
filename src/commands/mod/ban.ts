import { Command } from "discord-akairo";
import { Message, GuildMember } from "discord.js";


export default class BanCommand extends Command {
  public constructor () {
    super("ban", {
      aliases: ["ban", "b"],
      category: "mod",
      channel: "guild",
      clientPermissions: ["BAN_MEMBERS"],
      args: [{ id: "member", type: "member" }],
    });
  }


  public async exec(
    message: Message,
    { member }: { readonly member: GuildMember },
  ): Promise<string> {
    return member
      .ban()
      .then((bannedMember) =>
        Promise.resolve(
          `<@${message.author.id}> has banned **${bannedMember.user.tag}**`,
        ),
      );
  }
}
