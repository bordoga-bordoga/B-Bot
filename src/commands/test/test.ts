import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class TestCommand extends Command {
  public constructor () {
    super("test", {
      aliases: ["test"],
      category: "test",
      description: {
        content: "test lol",
        usage: "test",
        examples: [
          "test"
        ]
      },
      ratelimit: 3
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(`**\` ─────── \`**     test     **\` ─────── \`**`);
  }
}
