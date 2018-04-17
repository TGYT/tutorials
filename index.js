const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client(); // New Discord Client
const prefix = '!'; // commands prefix

client.on('ready', () => { // Ready Event
    console.log('Bot has started!');
});

client.on('message', message => { // Message Event
  
  let msg = message.content.toLowerCase();
  
    if (msg === prefix + 'youtube') {
        message.channel.send('Hi, **YouTube**! Subscribe to **Bolt Codes** for more videos, tutorials, series, etc.');
    }
});

client.login(process.env.SECRET); // My token is hidden so I don't have to regenerate it in every new video