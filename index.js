const Discord = require('discord.js'); // Discrd.JS package
const client = new Discord.Client(); // New Discord Client

client.on('ready', () => { // Ready Event
    console.log('Bot has started!');
});

client.on('message', message => { // Message Event
  
    if (message.content === 'youtube') {
        message.channel.send('Hi, **YouTube**! Subscribe to **Bolt Codes** for more videos, tutorials, series, etc.');
    }
});

client.login(process.env.SECRET); // My token is hidden so I don't have to regenerate it in every new video
