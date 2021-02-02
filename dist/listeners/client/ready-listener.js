"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        console.log(`🔴 ${this.client.user.tag} is now online and ready! 🔴`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZHktbGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGlzdGVuZXJzL2NsaWVudC9yZWFkeS1saXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUEwQztBQUUxQyxNQUFxQixhQUFjLFNBQVEseUJBQVE7SUFDakQ7UUFDRSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2IsT0FBTyxFQUFFLFFBQVE7WUFDakIsS0FBSyxFQUFFLE9BQU87WUFDZCxRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU0sSUFBSTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLDhCQUE4QixDQUFDLENBQUM7SUFDeEUsQ0FBQztDQUNGO0FBWkQsZ0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeUxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKFwicmVhZHlcIiwge1xuICAgICAgZW1pdHRlcjogXCJjbGllbnRcIixcbiAgICAgIGV2ZW50OiBcInJlYWR5XCIsXG4gICAgICBjYXRlZ29yeTogXCJjbGllbnRcIlxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGV4ZWMoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coYPCflLQgJHt0aGlzLmNsaWVudC51c2VyLnRhZ30gaXMgbm93IG9ubGluZSBhbmQgcmVhZHkhIPCflLRgKTtcbiAgfVxufVxuIl19