import { Command } from "discord-akairo";
import { Message } from "discord.js";

export default class PingCommand extends Command {
  public constructor () {
    super("ping", {
      aliases: ["ping"],
      category: "util",
      description: {
        content: "Check the latency of the ping to the Discord API",
        usage: "ping",
        examples: [
          "ping"
        ]
      },
      ratelimit: 3
    });
  }

  public exec(message: Message): Promise<Message> {
    return message.util.send(`Pong! \`${this.client.ws.ping}\``);
  }
}
//tesssssssst
