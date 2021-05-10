import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
  public constructor () {
    super("hello", {
      aliases: ["hello", "hi"],
      category: "util",
      description: {
        content: "Check the latency of the ping to the Discord API",
        usage: "hello",
        examples: [
          "hello",
          "hi"
        ]
      },
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send('Hello!');
  }
}
