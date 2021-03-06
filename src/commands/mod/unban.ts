import { Command } from "discord-akairo";
import { User, Message } from "discord.js";


export default class UnbanCommand extends Command {
  public constructor () {
    super("unban", {
      aliases: ["unban", "ub"],
      category: "mod",
      channel: "guild",
      clientPermissions: ["BAN_MEMBERS"],
      args: [{ id: "user", type: "user" }],
    });
  }


  public async exec(
    message: Message,
    { user }: { readonly user: User },
  ): Promise<string> {
    return !message.guild
      ? Promise.reject(new Error("This command must be run in a guild."))
      : message.guild?.members
        .unban(user)
        .then((unbannedMember) =>
          Promise.resolve(
            `${message.author.tag} has unbanned ${unbannedMember.tag}`,
          ),
        );
  }
}
