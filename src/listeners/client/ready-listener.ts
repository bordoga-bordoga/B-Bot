import { Listener } from "discord-akairo";

export default class ReadyListener extends Listener {
  public constructor () {
    super("ready", {
      emitter: "client",
      category: "client",
      event: "ready"
    });
  }

  public exec(): void {
    console.log('\x1b[1m', `🔴 ${this.client.user.username} is now online and ready! 🔴`);
  }
}
