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
            directory: config_1.prefix,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90LWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvYm90LWNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUErRTtBQUUvRSwrQkFBNEI7QUFDNUIsc0NBQTJDO0FBYzNDLE1BQXFCLFNBQVUsU0FBUSw2QkFBWTtJQTRCakQsWUFBb0IsTUFBa0I7UUFDcEMsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ3ZCLENBQUMsQ0FBQztRQTdCRSxvQkFBZSxHQUFvQixJQUFJLGdDQUFlLENBQUMsSUFBSSxFQUFFO1lBQ2xFLFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxXQUFXLENBQUM7U0FDOUMsQ0FBQyxDQUFDO1FBRUksbUJBQWMsR0FBbUIsSUFBSSwrQkFBYyxDQUFDLElBQUksRUFBRTtZQUMvRCxTQUFTLEVBQUUsZUFBTTtZQUNqQixZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNoQixNQUFNLEVBQUU7b0JBQ04sV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLDhDQUE4QztvQkFDdEcsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLDhDQUE4QztvQkFDdEcsT0FBTyxFQUFFLHNEQUFzRDtvQkFDL0QsS0FBSyxFQUFFLGtGQUFrRjtvQkFDekYsTUFBTSxFQUFFLG9DQUFvQztvQkFDNUMsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDZDtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDMUIsQ0FBQyxDQUFDO1FBT0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2pCLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQy9CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUNGO0FBcERELDRCQW9EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gXCJkaXNjb3JkLWFrYWlyb1wiO1xuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gXCJkaXNjb3JkLmpzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xuICBpbnRlcmZhY2UgQWthaXJvQ2xpZW50IHtcbiAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XG4gICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XG4gIH1cbn1cblxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xuICB0b2tlbj86IHN0cmluZztcbiAgb3duZXJzPzogc3RyaW5nIHwgc3RyaW5nW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdENsaWVudCBleHRlbmRzIEFrYWlyb0NsaWVudCB7XG4gIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XG4gIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xuICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIilcbiAgfSk7XG5cbiAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XG4gICAgZGlyZWN0b3J5OiBwcmVmaXgsXG4gICAgYWxsb3dNZW50aW9uOiB0cnVlLFxuICAgIGhhbmRsZUVkaXRzOiB0cnVlLFxuICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxuICAgIGNvbW1hbmRVdGlsTGlmZXRpbWU6IDNlNSxcbiAgICBkZWZhdWx0Q29vbGRvd246IDZlNCxcbiAgICBhcmd1bWVudERlZmF1bHRzOiB7XG4gICAgICBwcm9tcHQ6IHtcbiAgICAgICAgbW9kaWZ5U3RhcnQ6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcbiAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtzdHJ9XFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcbiAgICAgICAgdGltZW91dDogXCJZb3UgdG9vayB0b28gbG9uZywgdGhlIGNvbW1hbmQgaGFzIGJlZW4gY2FuY2VsbGVkLi4uXCIsXG4gICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgdHJpZXMsIHRoaXMgY29tbWFuZCBoYXMgbm93IGJlZW4gY2FuY2VsbGVkLi4uXCIsXG4gICAgICAgIGNhbmNlbDogXCJUaGlzIGNvbW1hbmQgaGFzIGJlZW4gY2FuY2VsbGVkLi4uXCIsXG4gICAgICAgIHJldHJpZXM6IDMsXG4gICAgICAgIHRpbWU6IDNlNFxuICAgICAgfSxcbiAgICAgIG90aGVyd2lzZTogXCJcIlxuICAgIH0sXG4gICAgaWdub3JlUGVybWlzc2lvbnM6IG93bmVyc1xuICB9KTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IgKGNvbmZpZzogQm90T3B0aW9ucykge1xuICAgIHN1cGVyKHtcbiAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnNcbiAgICB9KTtcblxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLnVzZUxpc3RlbmVySGFuZGxlcih0aGlzLmxpc3RlbmVySGFuZGxlcik7XG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xuICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXG4gICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxuICAgICAgcHJvY2Vzc1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XG4gICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgYXdhaXQgdGhpcy5faW5pdCgpO1xuICAgIHJldHVybiB0aGlzLmxvZ2luKHRoaXMuY29uZmlnLnRva2VuKTtcbiAgfVxufVxuIl19