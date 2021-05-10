import { Command } from "discord-akairo";
import { Message, MessageEmbed, TextChannel } from "discord.js";
import { prefix } from "../../config";


export default class AnnouncementsCommand extends Command {
  public constructor () {
    super("announcements", {
      aliases: ["announce", "post", "p"/*, "!announce", "!post", "!p", "-announce", "-post", "-p"*/],
      category: "mod",
      description: {
        content: "Sends out an announcement to a specific channel with the message you want to announce.",
        usage: "announce [ announcement message ]",
        examples: [
          "?announce This is a test announcement.",
          "?p test"
        ],
      },
      /*args: [
        {
          id: "announcementMessage",
          type: "string"
        },
        {
          id: "announcementImageDescription",
          type: (_: Message, str: string): null | String => {
            if (str && !isNaN(String(str))) return String(str);
          }
        },
        flag: ["-id "]
      ]*/
    });
  }


  public async exec(message: Message): Promise<void> {

    const announcementMessage = message.content.slice(prefix.length).replace(/announce|post|p/i, '');
    const announcementImageDescription = message.content;
    //const announcementImage = message.attachments.first().url;
    const destination = this.client.channels.cache.get('782491581429055519');

    // Announcements embed message.
    const announcementEmbed = new MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setTitle(`${message.guild.name} announcements`)
      .setDescription('⠀\n' + announcementMessage + '\n⠀')
      .setURL('https://cdn.discordapp.com/icons/605508992885587991/a8bfaceeba04bfc28ed01b9be18bf70c.png?size=4096')
      .setImage('https://cdn.discordapp.com/attachments/782491581429055519/837636343429070898/Shaaz_Jung_on_Instagram___You_are_now_here__the_night_has_brought_you__darkness_lives__and_her_two_m.jpg')
      //.setThumbnail('https://cdn.discordapp.com/icons/605508992885587991/a8bfaceeba04bfc28ed01b9be18bf70c.png?size=4096')
      .setFooter(announcementImageDescription + `\n\nThis message notified ${message.guild.name} members \nTo unsubscribe react with: ❎ \nTo subscribe react with: ✅`);
    (destination as TextChannel).send(announcementEmbed)
      // Reactions add to embed message.
      .then(sentEmbed => {
        sentEmbed.react('❎')
          .then(() => sentEmbed.react('✅'))
      });

    /*const announcementImageEmbed2 = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/782491581429055519/837636108090736670/unknown.png')
      .setFooter(announcementMessage);
    (destination as TextChannel).send(announcementImageEmbed2);

    const announcementImageEmbed3 = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/789914011663466548/837518001515266098/unknown.png');
    (destination as TextChannel).send(announcementImageEmbed3);

    const announcementImageEmbed4 = new MessageEmbed()
      .setImage('https://cdn.discordapp.com/attachments/789914011663466548/837412697833340958/COQhFdUDtpdJPG.jpg');
    (destination as TextChannel).send(announcementImageEmbed4);*/
  }
}
