exports.run = (client, msg, args) => msg.channel.send(`:ping_pong: | Pong! The ping is **${(client.ws.ping)}**ms.`);
