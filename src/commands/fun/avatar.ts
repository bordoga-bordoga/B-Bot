import { Command } from "discord-akairo";
import { Message, GuildMember, MessageEmbed, ImageSize } from "discord.js";

export default class AvatarCommand extends Command {
  public constructor () {
    super("avatar", {
      aliases: ["avatar", "av", "pfp"],
      category: "fun",
      description: {
        content: "Display the avatar of a member",
        usage: "avatar [ member ]",
        examples: [
          "avatar",
          "pfp @bordoga_bordoga#2413",
          "av bordoga_bordoga size = 2048"
        ]
      },
      args: [
        {
          id: "member",
          type: "member",
          match: "rest",
          default: (msg: Message) => msg.member
        },
        {
          id: "size",
          type: (_: Message, str: string): null | Number => {
            if (str && !isNaN(Number(str)) && [16, 32, 64, 128, 512, 1024, 2048].includes(Number(str))) return Number(str);
            return null;
          },
          match: "option",
          flag: ["size=", "size ", "size = ", "s", "s ", "s=", "s = "],
          default: 2048
        }
      ]
    });
  }

  public exec(message: Message, { member, size }: { member: GuildMember, size: number }): Promise<Message> {
    return message.util.send(new MessageEmbed()
      .setTitle(`Avatar |  **${member.user.tag}**`)
      .setColor("RANDOM")
      .setImage(member.user.displayAvatarURL({ size: size as ImageSize }))
    );
  }
}

