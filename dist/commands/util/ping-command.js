"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
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
    exec(message) {
        return message.util.send(`Pong! \`${this.client.ws.ping}\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGluZy1jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL3V0aWwvcGluZy1jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXlDO0FBR3pDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM5QztRQUNFLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFO2dCQUNYLE9BQU8sRUFBRSxrREFBa0Q7Z0JBQzNELEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDUixNQUFNO2lCQUNQO2FBQ0Y7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBZ0I7UUFDMUIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBbkJELDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICBwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKFwicGluZ1wiLCB7XG4gICAgICBhbGlhc2VzOiBbXCJwaW5nXCJdLFxuICAgICAgY2F0ZWdvcnk6IFwidXRpbFwiLFxuICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgY29udGVudDogXCJDaGVjayB0aGUgbGF0ZW5jeSBvZiB0aGUgcGluZyB0byB0aGUgRGlzY29yZCBBUElcIixcbiAgICAgICAgdXNhZ2U6IFwicGluZ1wiLFxuICAgICAgICBleGFtcGxlczogW1xuICAgICAgICAgIFwicGluZ1wiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICByYXRlbGltaXQ6IDNcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYFBvbmchIFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31cXGBgKTtcbiAgfVxufVxuIl19