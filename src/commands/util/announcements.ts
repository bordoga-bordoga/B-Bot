import { Command } from "discord-akairo";
import { Message, MessageEmbed, TextChannel } from "discord.js";


export default class Announcements extends Command {
  message: any;
  public constructor () {
    super("announcements", {
      aliases: ["announce", "post", "p"],
      category: "util",
      description: {
        content: "Sends out an announcement to a specific channel with a message you w8rite.",
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

    const Announcement_Message = message.content.substring(3);
    const destination = this.client.channels.cache.get('782491581429055519');

    (destination as TextChannel).send(Announcement_Message + '\n\n<@&711229532576677939>').then(ghostPing => {
      ghostPing.delete()
    });

    /*this.client.on('messageReactionAdd', (reaction, user) => {
      console.log('Reacted');
    });*/

    const announcement_Embed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle('\`[ server name ]\` announcements')
      .setDescription('⠀\n' + Announcement_Message + '\n⠀')
      .setFooter('This message notified [ server name ] members \nTo unsubscribe: ❎ \nTo subscribe: ✅');
    return (destination as TextChannel).send(announcement_Embed).then(sentEmbed => {
      sentEmbed.react('❎').then(() => sentEmbed.react('✅'));
    });
  }
}
