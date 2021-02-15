import { Command } from "discord-akairo";
import { Message, MessageEmbed, TextChannel } from "discord.js";
import { prefix } from "../../config";


export default class Announcements extends Command {
  message: any;
  public constructor () {
    super("announcements", {
      aliases: ["announce", "post", "p"],
      category: "util",
      description: {
        content: "Sends out an announcement to a specific channel with a message you write.",
        usage: "announce [ announcement message ]",
        examples: [
          "?announce This is a test announcement.",
          "?p test"
        ]
      },
      ratelimit: 3,
    });
  }


  public async exec(message: Message): Promise<void | Message> {

    const Announcement_Message = message.content.slice(prefix.length).replace(/announce|post|p/i, '');
    const destination = this.client.channels.cache.get('782491581429055519');

    // The announcements embed.
    const announcement_Embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle('\`[ server name ]\` announcements')
      .setDescription('⠀\n' + Announcement_Message + '\n⠀')
      .setFooter('This message notified [ server name ] members \nTo unsubscribe: ❎ \nTo subscribe: ✅');
    (destination as TextChannel).send(announcement_Embed).then(sentEmbed => {
      sentEmbed.react('❎').then(() => sentEmbed.react('✅'));
    });

    // Reactions roles for the announcements.
    //if (message.embed.title === '\`[ server name ]\` announcements') {
    this.client.on('messageReactionAdd', async (reaction, user) => {
      if (user.bot) return;
      if (!reaction.message.guild) return;

      if (reaction.emoji.name === '✅') {
        await reaction.message.guild.members.cache.get(user.id).roles.add('809785186598256690');
      } else if (reaction.emoji.name === '❎') {
        await reaction.message.guild.members.cache.get(user.id).roles.remove('809785186598256690');
      }
    });
    /*} else {
      return;
    }*/


    // Ghost Ping message.
    (destination as TextChannel).send(Announcement_Message + '\n\n<@&711229532576677939>').then(ghostPing => {
      ghostPing.delete()
    });
  }
}


