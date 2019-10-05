const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on("ready", () => {
  console.log("Je suis prêt");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}test`)) msg.channel.send("1 2 , 1 2");
});

client.login(TOKEN);
