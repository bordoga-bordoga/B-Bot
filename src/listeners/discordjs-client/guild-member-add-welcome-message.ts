import { Listener } from "discord-akairo";
import { Message, NewsChannel, TextChannel, GuildMember } from "discord.js";


export default class WelcomeMessageListener extends Listener {
  public constructor() {
    super("welcomeMessage", {
      emitter: "client",
      category: "client",
      event: "guildMemberAdd",
    });
  }


  public async exec(newMember: GuildMember): Promise<Message> {
    return ((newMember.guild.channels.resolve("") ??
      newMember.guild.systemChannel) as TextChannel)?.send(
      `Hey, <@${newMember.id}>. Welcome to the **${
        newMember.guild.name
      }** Discord.${
        newMember.guild.rulesChannel
          ? ` Read through the <#${
              newMember.guild.rulesChannelID ?? ""
            }> channel before engaging.`
          : ""
      }${
        newMember.guild.channels.cache.some(
          (channel) => channel instanceof NewsChannel,
        )
          ? ` Check out <#${
              newMember.guild.channels.cache.findKey(
                (channel) => channel instanceof NewsChannel,
              ) ?? ""
            }> for community updates.`
          : ""
      } Enjoy the server!`,
      {
        files: [
          newMember.guild.bannerURL() ??
            "src/assets/img/welcome.png",
        ],
      },
    );
  }
}
