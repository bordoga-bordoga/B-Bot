import { Command } from "discord-akairo";
import { Message, GuildMember } from "discord.js";


export default class RussianRouletteCommand extends Command {
  public constructor () {
    super("roulette", {
      aliases: ["roulette", "r"],
      category: "mod",
      channel: "guild",
      clientPermissions: ["KICK_MEMBERS", "BAN_MEMBERS"],
      args: [{ id: "member", type: "member" }],
    });
  }


  public async exec(
    message: Message,
    { member }: { readonly member: GuildMember },
  ): Promise<string> {
    const value = Math.random();
    const chance = value < 0.5;
    return (chance ? member.kick() : member.ban()).then((managedMember) =>
      Promise.resolve(
        `<@${message.author.id}> has ${chance ? "kicked" : "banned"} **${managedMember.user.tag
        }** after rolling a ${value}`,
      ),
    );
  }
}
