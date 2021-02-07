"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has been cancelled...",
                    ended: "You exceeded the maximum amount of tries, this command has now been cancelled...",
                    cancel: "This command has been cancelled...",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvYm90LWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUFpRztBQUVqRywrQkFBNEI7QUFDNUIsc0NBQTJDO0FBYzNDLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQTZCakQsWUFBb0IsTUFBa0I7UUFDcEMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztRQTlCRSxvQkFBZSxHQUFvQixJQUFJLGdDQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2xFLFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7U0FDOUMsQ0FBQyxDQUFDO1FBRUksbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRTtZQUMvRCxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDO1lBQzVDLE1BQU0sRUFBRSxlQUFNO1lBQ2QsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLElBQUk7WUFDakIsV0FBVyxFQUFFLElBQUk7WUFDakIsbUJBQW1CLEVBQUUsR0FBRztZQUN4QixlQUFlLEVBQUUsR0FBRztZQUNwQixnQkFBZ0IsRUFBRTtnQkFDaEIsTUFBTSxFQUFFO29CQUNOLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3RHLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLEdBQUcsR0FBRyw4Q0FBOEM7b0JBQ3RHLE9BQU8sRUFBRSxzREFBc0Q7b0JBQy9ELEtBQUssRUFBRSxrRkFBa0Y7b0JBQ3pGLE1BQU0sRUFBRSxvQ0FBb0M7b0JBQzVDLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNWO2dCQUNELFNBQVMsRUFBRSxFQUFFO2FBQ2Q7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzFCLENBQUMsQ0FBQztRQU9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUMvQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2hCLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQXJERCw0QkFxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBa2Fpcm9DbGllbnQsIENvbW1hbmRIYW5kbGVyLCBMaXN0ZW5lckhhbmRsZXIsIEluaGliaXRvckhhbmRsZXIgfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcbmltcG9ydCB7IFVzZXIsIE1lc3NhZ2UgfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xuaW1wb3J0IHsgam9pbiB9IGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBwcmVmaXgsIG93bmVycyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJkaXNjb3JkLWFrYWlyb1wiIHtcbiAgaW50ZXJmYWNlIEFrYWlyb0NsaWVudCB7XG4gICAgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyO1xuICAgIGxpc3RlbmVySGFuZGxlcjogTGlzdGVuZXJIYW5kbGVyO1xuICB9XG59XG5cbmludGVyZmFjZSBCb3RPcHRpb25zIHtcbiAgdG9rZW4/OiBzdHJpbmc7XG4gIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xuICBwdWJsaWMgY29uZmlnOiBCb3RPcHRpb25zO1xuICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcbiAgICBkaXJlY3Rvcnk6IGpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwibGlzdGVuZXJzXCIpXG4gIH0pO1xuXG4gIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcbiAgICBwcmVmaXg6IHByZWZpeCxcbiAgICBhbGxvd01lbnRpb246IHRydWUsXG4gICAgaGFuZGxlRWRpdHM6IHRydWUsXG4gICAgY29tbWFuZFV0aWw6IHRydWUsXG4gICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxuICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxuICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcbiAgICAgIHByb21wdDoge1xuICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxuICAgICAgICBtb2RpZnlSZXRyeTogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxuICAgICAgICB0aW1lb3V0OiBcIllvdSB0b29rIHRvbyBsb25nLCB0aGUgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxsZWQuLi5cIixcbiAgICAgICAgZW5kZWQ6IFwiWW91IGV4Y2VlZGVkIHRoZSBtYXhpbXVtIGFtb3VudCBvZiB0cmllcywgdGhpcyBjb21tYW5kIGhhcyBub3cgYmVlbiBjYW5jZWxsZWQuLi5cIixcbiAgICAgICAgY2FuY2VsOiBcIlRoaXMgY29tbWFuZCBoYXMgYmVlbiBjYW5jZWxsZWQuLi5cIixcbiAgICAgICAgcmV0cmllczogMyxcbiAgICAgICAgdGltZTogM2U0XG4gICAgICB9LFxuICAgICAgb3RoZXJ3aXNlOiBcIlwiXG4gICAgfSxcbiAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXG4gIH0pO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvciAoY29uZmlnOiBCb3RPcHRpb25zKSB7XG4gICAgc3VwZXIoe1xuICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9pbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKTtcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5zZXRFbWl0dGVycyh7XG4gICAgICBjb21tYW5kSGFuZGxlcjogdGhpcy5jb21tYW5kSGFuZGxlcixcbiAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXG4gICAgICBwcm9jZXNzXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLmxvYWRBbGwoKTtcbiAgICB0aGlzLmxpc3RlbmVySGFuZGxlci5sb2FkQWxsKCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBhd2FpdCB0aGlzLl9pbml0KCk7XG4gICAgcmV0dXJuIHRoaXMubG9naW4odGhpcy5jb25maWcudG9rZW4pO1xuICB9XG59XG4iXX0=