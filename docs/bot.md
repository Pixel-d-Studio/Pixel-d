# Forking the repo
Fork the repo https://github.com/Rolinked/Rolinked-Bot
## Changing the token
```js
const { AoiClient, LoadCommands } = require("aoi.js");
const bot = new AoiClient({
    token: "MTIxOTkxMTA0NTkyNjIyMzkxNA.G_WgVq.QQYAzp3z7DJr9psBPzqnEITYm4U0xBMOlOZJTI", // [!code focus]
    prefix: ".",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands/") //you can change this to any directory you want
 
bot.status({
    name: "noblixzy.js.cool", 
    type: "CUSTOM",
    status: "online",
    time: 10
});
```
Now chanke the `token` to your own.
Get your token at https://discord.com/developers/
## Editing code
### Changing the status
```js
bot.status({
    name: "noblixzy.js.cool", // [!code focus]
    type: "CUSTOM",
    status: "online",
    time: 10
});
```
You can change `noblixzy.js.cool` to anything you like!